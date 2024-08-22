//Show the modal
const [verification, setVerification] = useState({
    state: "success",
    error: "",
    code: "",
  });
<ReactNativeModal isVisible={verification.state === "success"}> </ReactNativeModal>

