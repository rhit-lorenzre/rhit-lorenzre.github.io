fetch('navbar.html')
    .then(Response => {
        if (!Response.ok) throw new Error("Navbar file not found");
        return Response.text();
    })
    .then (data => document.getElementById('navbar').innerHTML = data).catch(error=> console.error(err));
