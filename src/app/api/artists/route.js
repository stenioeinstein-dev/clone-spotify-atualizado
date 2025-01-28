export async function GET(req, res) {
    return Response.json(
        [
            {
                "id": 1,
                "name": "Boas festas",
                "urlartist": "/",
                "urlImg": "/1.jpeg"
            },
            
        ]
    );
}