import React, { useState } from "react";
import { Col, Row, Form, Card, Button } from "react-bootstrap";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const NewNetworkPage = () => {
  const [editorState, setEditorState] = useState("");

  const convertRaw = (e) => {
    e.preventDefault();
    JSON.stringify(convertToRaw(editorState.getCurrentContent()));
    console.log(JSON.stringify(convertToRaw(editorState.getCurrentContent())));
  };
  return (
    <div>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>Add New Page</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group>
                  <Form.Label>URL</Form.Label>
                  <Form.Control as="text" placeholder="URL" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Content [HTML Format]</Form.Label>
                  <Editor
                    style={{ minHeight: "200px" }}
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={(v) => setEditorState(v)}
                  />
                  <Button onClick={(e) => convertRaw(e)}>Convert </Button>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default NewNetworkPage;
