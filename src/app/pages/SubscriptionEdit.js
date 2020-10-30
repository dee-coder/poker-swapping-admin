import { Box, Paper } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Button, Card, Form, InputGroup, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import API from "../../apiUrl.json";
import { Link } from "react-router-dom";

const SubscriptionEdit = (props) => {
  const history = useHistory();
  const [Title, setTitle] = useState();
  const [Description, setDescription] = useState();
  const [StripeId, setStripeId] = useState();
  const [Type, setType] = useState("Monthly");
  const [PlanAmount, setPlanAmount] = useState();
  const [hold, setHold] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    var data = props.location.obj;
    setData(data);
    setTitle(data.title);
    setDescription(data.description);
    setStripeId(data.stripe_product_id);
    setType(data.subscription_type);
    setPlanAmount(data.plan_amount);
  }, []);

  const addThisPlan = () => {
    setHold(true);
    fetch(API.baseurl + API.updateSubscription, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stripe_id: StripeId,
        title: Title,
        description: Description,
        type: Type,
        amount: PlanAmount,
        id: data.id,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log();
        setHold(false);
        history.push("/subscription/all");
      })
      .catch((err) => {
        console.log(err);
        setHold(false);
      });
  };
  return (
    <Box>
      <Card>
        <Card.Header>
          <span>Add New Plan</span>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Label>Plan Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                value={Title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Plan Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Stripe Product ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product Id"
                value={StripeId}
                onChange={(e) => setStripeId(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Plan Type</Form.Label>
              <Form.Control
                as="select"
                value={Type}
                onChange={(e) => setType(e.target.value)}
              >
                <option>Monthly</option>
                <option>Annualy</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Plan Amount</Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Prepend>
                  <InputGroup.Text>£</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  id="inlineFormInputGroup"
                  placeholder="Amount"
                  value={PlanAmount}
                  onChange={(e) => setPlanAmount(e.target.value)}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <Link to="/subscription/all">
                <Button variant="secondary">Cancel</Button>
              </Link>
              <Button variant="primary" onClick={addThisPlan} disabled={hold}>
                {!hold ? (
                  <span>Add Plan</span>
                ) : (
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                )}
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Box>
  );
};

export default SubscriptionEdit;
