import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import p1 from "../assets/publication1.png";
import p2 from "../assets/publication2.png";

const Experience = () => {
  return (
    <>
      <div className="title">
        <h1>Experience</h1>
      </div>
      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        showArrows={false}
        showIndicators={false}
        showStatus={false}
      >
        <div>
          <div className="publications">
            <h2>Publications</h2>

            <div className="publication-carousel">
              <div className="publication-1">
                <img src={p1} alt="" />
                <div>
                  <a
                    href="https://doi.org/10.1101/2022.08.19.504435"
                    target="blank"
                  >
                    The ELF3 transcription factor is associated with an
                    epithelial phenotype and represses epithelial-mesenchymal
                    transition
                  </a>
                </div>
              </div>
              <div className="publication-2">
                <img src={p2} alt="" />
                <div>
                  <a href="#">
                    Automatic Detection of Sleep Stages Using Deep Learning
                    Algorithm
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="research">
            <h2>Research Experiance</h2>
            <div className="research-carousel">
              <div className="research-1">
                <h3>IEEE EMBS – MSRIT CHAPTER</h3>
                <p>Bangalore, IN</p>
                <p>July-2022-May-2023</p>
                <p>
                  I conducted research as a Research Intern at MSRIT IEEE EMBS
                  and M S Ramaiah Teaching Hospital, where I collected clinical
                  data from NICU using sensors on infants and developed
                  algorithms for cry detection in the NICU.
                </p>
              </div>
              <div className="research-2">
                <h3>Indian Institute of Science – BSSE</h3>
                <p>Bangalore, IN</p>
                <p>Sep 2021-April 2023</p>

                <p>
                  Research Intern at the Cancer Systems Biology (CSB) lab,
                  Indian Institute of Science. Developing gene interaction
                  models, analyzing gene expression in cancer, and working on a
                  forthcoming paper on HOTAIR.
                </p>
              </div>
              <div className="research-3">
                <h3>Optical coherence tomography</h3>
                <p>Bangalore, IN</p>
                <p>Aug 2021- Oct 2021</p>
                <p>
                  At the Biomedical Imaging lab in MSRIT, under Dr. Sriraam N, I
                  worked on extracting features and reducing noise in OCT images
                  from Narayana Nethralaya. I also contributed to developing a
                  miniaturized hand-held Optical Coherence Tomography imaging
                  device.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="professional">
            <h2>Professional Experiance</h2>
            <div className="professional-carousel">
              <div className="professional-1">
                <h3>Prima diagnostics - Bangalore, IN</h3>
                <p>Technical Intern</p>
                <p>
                  Biochemistry and Hematology lab - Observed and assisted in the
                  fixing and working of lab equipment in the diagnostic
                  laboratory
                </p>
              </div>
              <div className="professional-2">
                <h3>M S Ramaiah Teaching Hospital - Bangalore, IN</h3>
                <p>Course Work</p>
                <p>
                  Collected audio, video, temperature, SpO2 levels, and heart
                  rate data from infants in the Neonatal Intensive Care Unit
                  (NICU) through wearable sensors to extract features
                </p>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Experience;
