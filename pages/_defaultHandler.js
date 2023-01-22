import nextConnect from "next-connect";
  
export default function defaultHandler() {
    return nextConnect({
        attachParams: true,
        onError: (err, req, res, next) => {
            console.error(err.stack);
            res.status(500).end("Something broke!");
        },
        onNoMatch: (req, res) => {
            res.status(404).end("Page is not found");
        },
    })
}