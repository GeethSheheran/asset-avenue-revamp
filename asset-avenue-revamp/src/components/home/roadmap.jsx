import styled from "styled-components";
import { motion } from "framer-motion";
import { outToInVariantsRight } from "../home/animations";

export const HouseDetails = () => {
  return (
    <Container className="z-10">
      <h1 className="header text-[50px] font-bold  font-helvetica mt-16">
        Roadmap
      </h1>
      <Wrap className="relative">
        <Left>
          <Image src="/roadmap/Finished Building.png" alt="How it works" />
        </Left>
        <Right className="pr-24 pb-8 relative">
          <div className="absolute left-1/6 z-10 top-1/2 -translate-y-1/2 lg:w-full w-full h-[400px] lg:h-[700px] bg-[#3FAC55] rounded-full blur-3xl opacity-20"></div>

          <RightWrap>
            <ul className="customList ">
              <div className="pb-8">
                <motion.li
                  variants={outToInVariantsRight}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="ms-5 py-5 px-6 text-sm text-white bg-[#161D27] rounded-[10px]">
                    <strong>Q1 2025</strong> <br />
                    <br />
                    <span className="pl-8">Launch Presale</span>
                    <br />
                    <span className="pl-8">
                      DAO Integration of Backend with Frontend
                    </span>
                    <br />
                    <span className="pl-8">
                      Launch a Beta Version of the Platform
                    </span>
                    <br />
                    <span className="pl-8">TGE(Token Generation Event)</span>
                    <br />
                  </h3>
                </motion.li>
              </div>

              <div className="pb-8">
                <motion.li
                  variants={outToInVariantsRight}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="ms-5 py-5 px-6 text-sm text-white bg-[#161D27] rounded-[10px]">
                    <strong>Q2 2025</strong> <br />
                    <br />
                    <span className="pl-8">
                      Launch Global Marketing Campaigns
                    </span>
                    <br />
                    <span className="pl-8">Launch CEX Partnerships </span>
                    <br />
                    <span className="pl-8">
                      Real Estate Agency Partnerships{" "}
                    </span>
                    <br />
                    <span className="pl-8">
                      Launch AI Market Analysis (Beta)
                    </span>
                    <br />
                  </h3>
                </motion.li>
              </div>

              <div className="pb-8">
                <motion.li
                  variants={outToInVariantsRight}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="ms-5 py-5 px-6 text-sm text-white bg-[#161D27] rounded-[10px]">
                    <strong>Q3 2025</strong> <br />
                    <br />
                    <span className="pl-8">
                      Launch Mobile App on IOS & Android
                    </span>
                    <br />
                    <span className="pl-8">
                      Phase 2 Global Marketing Campaign
                    </span>
                    <br />
                    <span className="pl-8">
                      Launch AI Based Property Valuation
                    </span>
                    <br />
                    <span className="pl-8">
                      Collaboration With Lending Institutions
                    </span>
                    <br />
                  </h3>
                </motion.li>
              </div>

              <div className="pb-8">
                <motion.li
                  variants={outToInVariantsRight}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="ms-5 py-5 px-6 text-sm text-white bg-[#161D27] rounded-[10px]">
                    <strong>Q4 2025</strong> <br />
                    <br />
                    <span className="pl-8">
                      Launch NFT Property Market Place
                    </span>
                    <br />
                    <span className="pl-8">
                      Integrate Decentralized Finance (DeFi) Options
                    </span>
                    <br />
                    <span className="pl-8">
                      Phase 3 Global Marketing Campaign
                    </span>
                    <br />
                    <span className="pl-8">Launch Ambassador Program</span>
                    <br />
                  </h3>
                </motion.li>
              </div>

              <button className="mt-12 px-6 item-center py-2 bg-[#16A34A] text-white font-semibold rounded-[10px] hover:bg-[#11823B] transition self-end">
                MORE INFO
              </button>
            </ul>
          </RightWrap>
        </Right>
        {/* <div className="absolute inset-0">
        <img
          src="/Ellipse2.png"
          alt="Background Left"
          className="absolute  w-1/2 right-0 bottom-1 z-10 opacity-100"
        />
      </div> */}
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 70vh;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1.header {
    color: white;
    margin-bottom: 20px;
  }
`;

const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0px 0;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    width: 97%;
  }
`;

const Left = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%) scale(1.2);
  width: auto;
  height: 100%;
  object-fit: cover;
`;

const Right = styled.div`
  flex: 2;

  @media only screen and (max-width: 1200px) {
    width: 100%;
    padding: 15px 0;
  }
`;

const RightWrap = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;

  div {
    min-height: 150px;
    border-left: 2px solid #3fac55;
    position: relative;
  }

  ul.customList {
    list-style-type: none;
    padding: 0;
  }

  ul.customList li {
    padding-left: 20px;
    padding-top: 5px;
  }

  ul.customList li::before {
    content: "•";
    color: #3fac55;
    font-size: 50px;
    position: absolute;
    left: -11px;
    top: 0;
  }
`;
