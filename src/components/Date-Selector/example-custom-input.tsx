import { forwardRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
interface ExampleCustomInputProps {
    value: string;
    onClick: () => void;
}

const ExampleCustomInput = forwardRef<
    HTMLDivElement,
    ExampleCustomInputProps
>(({ value, onClick }, ref) => (
    <div
        className="example-custom-input"
        style={{
            width: "175px",
            height: "47px",
            borderRadius: "10px",
            border: "none",
            padding: "15px",
            backgroundColor: "#ffffff",
            gap: "10px",
            color: "#5A5A89",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
        }}
        onClick={onClick}
        ref={ref}
    >
        {value}
        {/* <FontAwesomeIcon icon={faCalendarAlt} /> */}
    </div>
));

export default ExampleCustomInput