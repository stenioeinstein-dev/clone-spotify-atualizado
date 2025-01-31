export async function GET(req, res) {
    return Response.json(
        [
            {
                "id": 1,
                "name": "Artist 1",
                "s": "Artist",
                "urlartist": "/",
                "urlImg": "/1.jpeg"
            },
            {
                "id": 2,
                "name": "Artist 2",
                "s": "Artist",
                "urlartist": "/",
                "urlImg": "/2.jpeg"
            },
            {
                "id": 3,
                "name": "Artist 3",
                "s": "Artist",
                "urlartist": "/",
                "urlImg": "/3.jpeg"
            },
            
        ]
    );
}