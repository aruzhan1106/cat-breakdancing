export default function handler(req, res) {
    // get the tokenId from the query params
    const tokenId = req.query.tokenId;
    // As all the images are uploaded on github, we can extract the images from github directly.
    const image_url =
      "https://github.com/aruzhan1106/cat-breakdancing/tree/main/my-app/public/fakeinspo/";
    // The api is sending back metadata for a Crypto Dev
    // To make our collection compatible with Opensea, we need to follow some Metadata standards
    // when sending back the response from the api
    // More info can be found here: https://docs.opensea.io/docs/metadata-standards
    res.status(200).json({
      name: "Fake Inspo #" + tokenId,
      description: "Fake Inspo is a collection of fake inspirational quotes",
      image: image_url + tokenId + ".png",
    });
  }