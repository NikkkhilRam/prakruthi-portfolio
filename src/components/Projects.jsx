import React from "react";

const Projects = () => {
  return (
    <div id="projects">
      <div className="project">
        <div className="project-title">
          <h1>Project Works</h1>
        </div>
        <div className="project-cards">
          <div className="project-1">
            <h2>Tremor Detection Using Smart Gloves</h2>
            <p>
              Under the guidance of Dr. Basvaraj Hiremat, MSRIT Devised a smart
              glove to analyze hand tremors by integrating flex sensors with
              Arduino UNO and Associated level of tremor based on resistance
              obtained
            </p>
          </div>
          <div className="project-2">
            <h2>Automatic Spectral-Temporal Modality Based Sleep Staging</h2>
            <p>
              Under the guidance of Dr. C K Narayanappa, MSRIT, Presented a
              novel and efficient technique to identify sleep stages using CNN,
              CNN + LSTM methods applied to 30s epochs of single-channel Fpz-Cz
              channels. Further Hypnograms were plotted to show similarity
              between real and predicted models with accuracy: 84.19%,
              MF1:76.76%
            </p>
          </div>
          <div className="project-3">
            <h2>Designing an Assist Device for Hand Rehabilitation</h2>
            <p>
              Under the guidance of Dr Sweeti, MSRIT - Designed a therapy
              platform for arm rehabilitation in stroke patients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
