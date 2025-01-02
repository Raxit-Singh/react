import React, { useState } from "react";
import QRCode from "react-qr-code";

const QrCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerator() {
    setQrCode(input);
    setInput('')
  }

  return (
    <div className="bg-black flex flex-col justify-center items-center pt-6">
      <div className="pb-3">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter your text"
          value={input}
          className="p-2 rounded-lg"
        />
        <button className="bg-gray-400 p-2 rounded-lg text-white" disabled={input ? false : true} onClick={handleGenerator}>Generate Code</button>
      </div>
      <div className="border-4 border-white rounded-lg">
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" fgColor="#000"/>
      </div>
    </div>
  );
};

export default QrCodeGenerator;
