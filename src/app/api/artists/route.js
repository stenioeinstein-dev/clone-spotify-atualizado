export async function GET(req, res) {
    return Response.json(
        [
            {
                "id": 1,
                "name": "Artist 1",
                "urlartist": "/",
                "urlImg": "/1.jpeg"
            },
            {
                "id": 2,
                "name": "Artist 2",
                "urlartist": "/",
                "urlImg": "/2.jpeg"
            },
            {
                "id": 3,
                "name": "Artist 3",
                "urlartist": "/",
                "urlImg": "/3.jpeg"
            },
            
        ]
    );
}