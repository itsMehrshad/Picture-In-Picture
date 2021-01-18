const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt the user to select media Stream

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.onplay();
    };
  } catch (error) {
    // Catch Our Errors
    console.log("Error is happening, Unfortunately ", error);
  }
}
button.addEventListener("click", async () => {
  // Disable Button
  button.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  //Reset
  button.disabled = false;
});
// Calling The Function Obviously :)
selectMediaStream();
