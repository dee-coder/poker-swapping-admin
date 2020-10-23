import React, { useState } from "react";
import { Col, Row, Form, Card } from "react-bootstrap";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const NewNetworkPage = () => {
  const [editorState, setEditorState] = useState("");

  const convertRaw = () => {
    convertToRaw(contentState: ContentState): RawDraftContentState

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
