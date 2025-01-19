import DigitalClock from "./components/DigitalClock/DigitalClock";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <DigitalClock title="London " timeZone="Europe/London" />
        <DigitalClock title="New York " timeZone="America/New_York" />
      </div>
      <div className="row">
        <DigitalClock title="Tokyo " timeZone="Asia/Tokyo" />
        <DigitalClock title="Sydney " timeZone="Australia/Sydney" />
      </div>
      <div className="row">
        <DigitalClock title="Dubai " timeZone="Asia/Dubai" />
        <DigitalClock title="Paris " timeZone="Europe/Paris" />
      </div>
    </div>
  );
}
