import React from "react";
import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";

import { PictureOutlined, SendOutlined } from "@ant-design/icons";
// import { getByDisplayValue } from '@testing-library/react';

const MessageForm = (props) => {
  const [value, setValue] = useState("");
  const { chatId, creds } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) sendMessage(creds, chatId, { text });

    setValue("");
  };

  const handleChange = (event) => {
    setValue(event.target.value);

    isTyping(props, chatId);
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label className="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
        <inptut
          type="file"
          multiple={false}
          id="upload-button"
          style={{ display: "none" }}
          onChange={handleUpload}
        />
      </label>
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};

export default MessageForm;
