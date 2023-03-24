export default async function handler(req, res) {
    const response = await fetch('http://localhost:1337/api/writers', {
      method: 'POST',
      body: req.body,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      res.status(200).json({ message: 'Success' });
    } else {
      res.status(500).json({ message: 'Error' });
    }
    console.log(req)
  }