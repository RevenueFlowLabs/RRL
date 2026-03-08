export default async function handler(req, res) {
  res.status(200).json({ message: "System ready. Input your keys in Settings later." });
}
