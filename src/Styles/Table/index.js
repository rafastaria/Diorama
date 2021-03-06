import styled from "styled-components";
import Modal from "react-responsive-modal";
import { Button } from "reactstrap";
export const RedButton = styled(Button)`
  text-align: center;
`;
export const ChartContainer = styled.div`
  margin: 0 auto;
  .btn-danger {
    color: #fff;
    background-color: #931e2f;
    border-color: #931e2f;
    text-align: center;
    margin: 0 auto;
  }
  .styles_overlay__CLSq- .styles_modal__gNwvD {
    font-family: "IBM Plex Mono";
    .recharts-cartesian-axis-tick {
      font-family: "IBM Plex Mono";
    }
  }
`;

export const Container = styled.div`
  padding-top: 30px;
  .styles_overlay__CLSq- .styles_modal__gNwvD {
    font-family: "IBM Plex Mono";
    .recharts-cartesian-axis-tick {
      font-family: "IBM Plex Mono";
    }
  }
  .react-bs-table-container {
    .react-bs-table table th {
      white-space: pre-line;
      text-overflow: unset;
      font-size: 15px;
    }
    .react-bs-table table td {
      white-space: pre-line;
      overflow-wrap: break-word;
      overflow-x: hidden;
    }
    overflow-x: hidden;
  }
  .styles_modal__gNwvD {
    width: 90%;
    max-width: 100%;
  }
  .recharts-default-legend {
    padding-top: 40px;
  }
`;

export const APContainer = styled.div`
  .recharts-default-legend {
    padding-top: 40px;
  }
`;

export const Sub = styled.div``;
export const ChartModal = styled(Modal)`
  display: block;
  width: 1200px;
  padding-left: 0px;
  font-family: "IBM Plex Mono" !important;
`;
export const Text = styled.p`
  text-align: center;
  font-weight: bold;
`;

export const HorizontalTimeLine = styled.div`
  border-bottom: 3px solid #4588ba;
  width: 250px;
`;
export const HorizontalText = styled.p`
  margin-left: 120px;
  font-weight: bold;
  color: #4588ba;
`;

export const Duration = styled.p`
  margin-left: 230px;
  font-weight: bold;
  color: #4588ba;
`;
