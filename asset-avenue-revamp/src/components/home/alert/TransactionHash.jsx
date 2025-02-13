import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

const TransactionHash = ({ onClose, rewards }) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="px-6 rounded-lg shadow-lg w-full text-center max-w-xl"
      >
        <div className="w-full bg-[#05350F] p-8 rounded-[36px] rounded-tl-none shadow-[0_4px_145px_0_#56C46C9C] relative text-white text-center">
          <button
            onClick={onClose}
            className="absolute top-0 right-0  bg-green-700 rounded-full p-2 font-base text-xl z-10 transform transition duration-300 ease-in-out hover:rotate-180"
          >
            <IoMdClose className="h-5 w-5 text-white" />
          </button>

          <div className="flex justify-center mb-6">
            <img
              src="/asset.png"
              alt="Wallet Preview"
              className="w-16 rounded-lg shadow-lg"
            />
          </div>
          <p className="text-sm md:text-[16px] max-w-lg mx-auto mb-6">
            You can see your rewards in your dashboard and claim them after the
            launch. After you claim your tokens and rewards, they will be
            deposited to your wallet.
          </p>
          <a
            className="bg-[#176827] text-white rounded-md px-4 py-3 hover:bg-[#0F4C1A] transition-colors"
            href={"https://dashboard.assetavenuve.capital"}
            target="_blank"
            rel="noreferrer"
          >
            Stake them now for {rewards}% rewards
          </a>
        </div>
      </motion.div>
    </div>
  );
};

TransactionHash.propTypes = {
  onClose: () => {},
  rewards: "0",
};

export default TransactionHash;
