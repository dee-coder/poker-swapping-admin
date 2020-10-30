import { Box, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { Button, Card, Form, InputGroup, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import API from "../../apiUrl.json";

const SubscriptionNew = () => {
  const history = useHistory();
  const [Title, setTitle] = useState();
  const [Description, setDescription] = useState();
  const [StripeId, setStripeId] = useState();
  const [Type, setType] = useState("Monthly");
  const [PlanAmount, setPlanAmount] = useState();
  const [hold, setHold] = useState(false);

  const addThisPlan = () => {
    setHold(true);
    fetch(API.baseurl + API.addNewSubscription, {
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
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Plan Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Stripe Product ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product Id"
                onChange={(e) => setStripeId(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Plan Type</Form.Label>
              <Form.Control
                as="select"
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
                  onChange={(e) => setPlanAmount(e.target.value)}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group>
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

export default SubscriptionNew;
