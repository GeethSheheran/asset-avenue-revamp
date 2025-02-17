import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { useAuthStore } from "../../../store";
import { AXIOS_INSTANCE } from "../../../db";

const PaymentSuccess = ({
  onClose,
  walletAddress,
  presaleData,
  wertOrderId,
}) => {
  const { user } = useAuthStore();

  const [visible, setVisible] = useState(true);
  const [aavAmount, setAavAmount] = useState(0);
  const [order, setOrder] = useState(null);
  const [copySuccess, setCopySuccess] = useState("");

  const handleClose = () => {
    setVisible(false);
    if (onClose) onClose();
  };

  // Function to truncate wallet address
  const truncateAddress = (address) => {
    if (!address) return "";
    return `${address.slice(0, 20)}...${address.slice(-4)}`;
  };

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(type);
      setTimeout(() => setCopySuccess(""), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleViewTransaction = (hash) => {
    const isDevEnvironment = import.meta.env.VITE_ENV === "development";
    const baseUrl = isDevEnvironment
      ? "https://explorer.solana.com/tx"
      : "https://solscan.io/tx";
    const cluster = isDevEnvironment ? "?cluster=devnet" : "";
    const url = `${baseUrl}/${hash}${cluster}`;
    window.open(url, "_blank");
  };

  if (!visible) return null;

  const fetchOrder = async (orderId) => {
    try {
      const response = (
        await AXIOS_INSTANCE.get(`/order/findByOrderId/${orderId}`, {
          headers: {
            Authorization: `Bearer ${user?.access_token}`,
          },
        })
      )?.data;
      setOrder(response?.result);
      const usdtAmount = +response?.result?.usdtAmount;
      let aavRate = Number(presaleData?.pricePerTokenInUsdc) / 1e6;

      setAavAmount(Number(usdtAmount / aavRate).toFixed(8));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchOrder(wertOrderId);
    }, 3000);
    return () => clearInterval(interval);
  }, [wertOrderId]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full max-w-md mx-4"
      >
        <div className="bg-[#05350F] p-8 rounded-[36px] rounded-tl-none shadow-[0_4px_145px_0_#56C46C9C] relative">
          <img
            src="hero/widget.png"
            alt="Background Pattern"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-[36px] opacity-50 z-0"
          />

          <div className="relative z-10">
            <button
              onClick={handleClose}
              className="absolute -right-4 -top-4 bg-[#3FAC55] rounded-full p-2 transform transition duration-300 ease-in-out hover:rotate-180"
            >
              <IoMdClose className="h-5 w-5 text-white" />
            </button>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-[#3FAC55] rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">
                Payment Successful!
              </h2>

              <p className="text-gray-300 text-center mb-6">
                <span className="flex items-center justify-center">
                  {aavAmount > 0 ? (
                    `${aavAmount} AAV tokens will be transferred to your wallet shortly`
                  ) : (
                    <>
                      Calculating AAV tokens...
                      <div className="ml-2 animate-spin h-4 w-4 border-2 border-[#3FAC55] border-t-transparent rounded-full" />
                    </>
                  )}
                </span>
              </p>

              <div className="space-y-4 w-full">
                <div className="bg-[#0A4518] p-4 rounded-lg w-full">
                  <p className="text-gray-300 text-sm mb-2">Wallet Address:</p>
                  <div className="flex items-center justify-between">
                    <p className="text-white font-mono break-all">
                      {truncateAddress(walletAddress)}
                    </p>
                    <button
                      onClick={() => handleCopy(walletAddress, "wallet")}
                      className="ml-2 text-[#3FAC55] hover:text-[#11823B] transition-colors"
                    >
                      {copySuccess === "wallet" ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>

                <div className="bg-[#0A4518] p-4 rounded-lg w-full">
                  <p className="text-gray-300 text-sm mb-2">
                    Transaction Hash:
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-white font-mono break-all">
                      {order?.aavTransferHash
                        ? truncateAddress(order.aavTransferHash)
                        : "Pending..."}
                    </p>
                    {order?.aavTransferHash && (
                      <button
                        onClick={() =>
                          handleViewTransaction(order.aavTransferHash)
                        }
                        className="ml-2 text-[#3FAC55] hover:text-[#11823B] transition-colors"
                      >
                        View
                      </button>
                    )}
                  </div>
                </div>

                <div className="bg-[#0A4518] p-4 rounded-lg w-full">
                  <p className="text-gray-300 text-sm mb-2">Transfer Status:</p>
                  <div className="flex items-center">
                    <p className="text-white font-mono">
                      {order?.aavTransferStatus || "In Progress..."}
                    </p>
                    {!order?.aavTransferStatus && (
                      <div className="ml-2 animate-spin h-4 w-4 border-2 border-[#3FAC55] border-t-transparent rounded-full" />
                    )}
                  </div>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="w-full bg-[#3FAC55] hover:bg-[#11823B] text-white font-bold py-3 px-6 rounded-lg text-sm uppercase transition-colors mt-6"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentSuccess;
