import { h } from "preact";
import { useState } from 'preact/hooks';

const styles = {
    mainContainer: {
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        overflow: "hidden"
    },
    page1ImageContainer : {
        flex: 1
    },
    page1ContentContainer : {
        flex: 1
    },
    page1Image: {
        width: "100%"
    },
    commonButton: {
        background: "none",
        borderRadius: "100px",
        display: "inline-block",
        maxWidth: "100%",
        position: "relative",
        textAlign: "center",
        fontWeight: "900",
        fontSize: "1.6rem",
        lineHeight: 1.375,
        letterSpacing: ".05em",
        textTransform: "uppercase",
        minWidth: "150px",
        padding: "25px 26px",
        backgroundColor: "#fff",
        border: "1px solid #fff",
        color: "#000",
        marginTop: "48px",
        textDecoration: "none"
    },
    page1Content: {
       marginLeft: "10%",
       marginTop: "20%"
    },
    page2MainContainer: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    page2ContentContainer: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textInput: {
        display: "block",
        resize: "none",
        width: "100%",
        backgroundColor: "#e7dacf",
        border: "none",
        borderBottom: "1px solid transparent",
        borderRadius: "4px 4px 0 0",
        fontWeight: "400",
        fontSize: "2.4rem",
        lineHeight: "1.25",
        padding: "30px 20px 14px"
    },
    page3Options: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        border: 0
    },
    page3Legend: {
        border: 0,
        clip: "rect(0 0 0 0)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        whiteSpace: "nowrap",
        width: "1px"
    },
    page3Radio: {
        border: 0,
        clip: "rect(0 0 0 0)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        whiteSpace: "nowrap",
        width: "1px"
    },
    page3Label: {
        fontWeight: "900",
        fontSize: "1.6rem",
        lineHeight: "1.375",
        letterSpacing: ".05em",
        textTransform: "uppercase",
        transition: "all .3s ease-in-out",
        alignItems: "center",
        backgroundColor: "#fff",
        border: "1px solid transparent",
        borderRadius: "100%",
        color: "#000",
        display: "flex",
        height: "150px",
        justifyContent: "center",
        padding: "20px",
        textAlign: "center",
        width: "150px"
    }
}

export default function SpaDemo() {
const [activePage, setActivePage] = useState(1)
const [firstName, setFirstName] = useState("")
console.log("SpaDemo render");
  return (
    <div>
    {
        activePage === 1 && (
        <div style={styles.mainContainer}>
            <div style={styles.page1ImageContainer}>
                <img src="https://www.myphenology.com/_next/image?url=%2Fimages%2Fcontent%2FLeftSide.png&w=3840&q=75" style={styles.page1Image} />
            </div>
            <div style={styles.page1ContentContainer}>
                <div style={styles.page1Content}>
                    <h1>Your answer for the balance you need.</h1>
                    <div>
                        <a style={styles.commonButton} href="#" onClick={() => setActivePage(2)}>
                            <span style={styles.commonButtonText}>Let’s get started</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>)
    }
    {
        activePage === 2 && (
        <div style={styles.mainContainer}>
            <div style={styles.page2MainContainer}>
                <div>
                    <h1>What's your first name?</h1>
                    <a style={styles.commonButton} href="#" onClick={() => setActivePage(3)}>
                        <span style={styles.commonButtonText}>Continue</span>
                    </a>
                </div>
            </div>
            <div style={styles.page2ContentContainer}>
                <div>
                    <span>MY NAME IS</span>
                    <input type="text" style={styles.textInput} value={firstName} onChange={(evt) => setFirstName(evt.target.value)} />
                </div>
            </div>
        </div>)
    }
    {
        activePage === 3 && (
        <div style={styles.mainContainer}>
            <div style={styles.page2MainContainer}>
                <div>
                    <h1>Are you on hormonal birth control?</h1>
                    <a style={styles.commonButton} href="#">
                        <span style={styles.commonButtonText}>Continue</span>
                    </a>
                </div>
            </div>
            <div style={styles.page2ContentContainer}>
                <div>
                 <fieldset style={styles.page3Options}>
                    <legend style={styles.page3Legend} />
                    <span onClick={() => setActivePage(4)}>
                        <input style={styles.page3Radio} id="YES" name="HORMONAL_BIRTH_CONTROL" type="radio" value="YES" />
                        <label style={styles.page3Label} for="YES"><span>Yes</span></label>
                    </span>
                    <span onClick={() => setActivePage(4)}>
                        <input style={styles.page3Radio} id="NO" name="HORMONAL_BIRTH_CONTROL" type="radio" value="NO" />
                        <label style={styles.page3Label} for="NO"><span>No</span></label>
                    </span>
                </fieldset>
                </div>
            </div>
        </div>)
    }
    {
        activePage === 4 && (
        <div style={styles.mainContainer}>
            <div style={styles.page2MainContainer}>
                <div>
                    <h1>{firstName}, you are in menopause</h1>
                    <h2>Let's buy our products to feel better!</h2>
                </div>
            </div>
        </div> 
        )
    }
    </div>
  );
}
