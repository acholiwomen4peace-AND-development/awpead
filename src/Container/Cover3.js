import React from "react";
import Button from "@mui/material/Button";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
/*import KeyboardArrowRight from "@emotion/styled/KeyboardArrowRight";*/
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import im1 from './im1.png';
import  im3 from './im3.npg';
/*import KeyboardArrowLeft from "@emotion/styled/KeyboardArrowLeft";*/

// Collection of images with their labels and paths
const MyCollection = [
    {
        label: "First Picture",
        imgPath:
            "im1.png",
    },
    {
        label: "Second Picture",
        imgPath:
            "im1.png",
    },
    {
        label: "Third Picture",
        imgPath:
            "im3.png",
    }
];

const Cover3 = () => {
    const CollectionSize = MyCollection.length;
    const theme = useTheme();
    const [index, setActiveStep] = React.useState(0);
    
     // Function to go to the next picture
    const goToNextPicture = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const goToPrevioustPicture = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div
            style={{
                marginLeft: "40%",
            }}
        >
            <h2>How to Create Image Slider in ReactJS?</h2>
            <div
                style={{
                    maxWidth: 400,
                    flexGrow: 1,
                }}
            >
                <Paper
                    square
                    elevation={0}
                    style={{
                        height: 50,
                        display: "flex",
                        paddingLeft: theme.spacing(4),
                        backgroundColor: theme.palette.background.default,
                        alignItems: "center",
                    }}
                >
                    <Typography>{MyCollection[index].label}</Typography>
                </Paper>
                <img
                    src={MyCollection[index].imgPath}
                    style={{
                        height: 255,
                        width: "100%",
                        maxWidth: 400,
                        display: "block",
                        overflow: "hidden",
                    }}
                    alt={MyCollection[index].label}
                />
                <MobileStepper
                    variant="text"
                    position="static"
                    index={index}
                    steps={CollectionSize}
                    nextButton={
                        <Button
                            size="small"
                            onClick={goToNextPicture}
                            disabled={index === CollectionSize - 1}
                        >
                            Next
                           
                        </Button>


                    }
                />
            </div>
        </div>
    );
};

export default Cover3;