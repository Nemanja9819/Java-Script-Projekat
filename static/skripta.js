function init() {

    const cookies = document.cookie.split('=');
    const token = cookies[cookies.length - 1];
    
    fetch('http://localhost:8000/admin/hrana',{
        headers: { 'Authorization': `Bearer ${token}` }
    })
        .then( res => res.json() )
        .then( data => {
            const lst = document.getElementById('hranaLst');

            data.forEach( el => {
                lst.innerHTML += `<li>ID: ${el.id}, Ime: ${el.ime}, Sastojci: ${el.sastojci}, Cena: ${el.cena}</li>`;
            });
        });

    fetch('http://localhost:8000/admin/pice',{
        headers: { 'Authorization': `Bearer ${token}` }
    })
        .then( res => res.json() )
        .then( data => {
            const lst = document.getElementById('piceLst');

            data.forEach( el => {
                lst.innerHTML += `<li>ID: ${el.id}, Ime: ${el.ime}, Cena: ${el.cena}</li>`;
            });
        });

    fetch('http://localhost:8000/admin/stolovi',{
        headers: { 'Authorization': `Bearer ${token}` }
    })
        .then( res => res.json() )
        .then( data => {
            const lst = document.getElementById('stoloviLst');

            data.forEach( el => {
                lst.innerHTML += `<li>ID: ${el.id}, Br. stolica: ${el.stolice}</li>`;
            });
        });    
    
    document.getElementById('hranaBtn').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            ime: document.getElementById('ime').value,
            sastojci: document.getElementById('sastojci').value,
            cena: document.getElementById('cena').value
        };

        document.getElementById('ime').value = '';
        document.getElementById('sastojci').value = '';
        document.getElementById('cena').value = '';

        fetch('http://localhost:8000/admin/hrana', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token}` 
            },
            body: JSON.stringify(data)
        })
            .then( res => res.json() )
            .then( data => {
                document.getElementById('hranaLst').innerHTML += `<li>ID: ${data.id}, Ime: ${data.ime}, Sastojci: ${data.sastojci},Cena: ${data.cena} </li>`;
            });
    });

    document.getElementById('piceBtn').addEventListener('click', e => {
        e.preventDefault();
        
        const data = {
            ime: document.getElementById('imePice').value,
            cena: document.getElementById('cenaPice').value
        };

        document.getElementById('imePice').value = '';
        document.getElementById('cenaPice').value = '';

        fetch('http://localhost:8000/admin/pice', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token}` 
            },
            body: JSON.stringify(data)
        })
            .then( res => res.json() )
            .then( data => {
                document.getElementById('piceLst').innerHTML += `<li>ID: ${data.id}, Ime: ${data.ime},Cena: ${data.cena}</li>`;
            });
    });

    document.getElementById('stoloviBtn').addEventListener('click', e => {
        e.preventDefault();
        
        const data = {
            stolice: document.getElementById('brStolica').value,
        };

        document.getElementById('brStolica').value = '';

        fetch('http://localhost:8000/admin/stolovi', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token}` 
            },
            body: JSON.stringify(data)
        })
            .then( res => res.json() )
            .then( data => {
                document.getElementById('stoloviLst').innerHTML += `<li>ID: ${data.id}, Stolice: ${data.stolice}</li>`;
            });
    });

    document.getElementById('hranaBtnIz').addEventListener('click', e => {
        e.preventDefault();
   
        const data = {
            id: document.getElementById('idHrIz').value,
            ime: document.getElementById('imeHrIz').value,
            sastojci: document.getElementById('sastojciHrIz').value,
            cena: document.getElementById('cenaHrIz').value
        };

        document.getElementById('idHrIz').value = '';
        document.getElementById('imeHrIz').value = '';
        document.getElementById('sastojciHrIz').value = '';
        document.getElementById('cenaHrIz').value = '';

        fetch('http://localhost:8000/admin/hrana/' + data.id, {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token}` 
            },
            body: JSON.stringify(data)
        })
            .then( res => res.json() )
            .then( data => {
                const lst = document.getElementById('hranaLst');

                 data.forEach( el => {
                  lst.innerHTML += `<li>ID: ${el.id}, Ime: ${el.ime}, Sastojci: ${el.sastojci}, Cena: ${el.cena}</li>`;
                });
            });
    });

    document.getElementById('piceBtnIz').addEventListener('click', e => {
        e.preventDefault();
        
        const data = {
            id: document.getElementById('idPiIz').value,
            ime: document.getElementById('imePiIz').value,
            cena: document.getElementById('cenaPiIz').value
        };

        document.getElementById('idPiIz').value='';
        document.getElementById('imePiIz').value = '';
        document.getElementById('cenaPiIz').value = '';

        fetch('http://localhost:8000/admin/pice/'+ data.id, {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token}` 
            },
            body: JSON.stringify(data)
        })
            .then( res => res.json() )
            .then( data => {
                const lst = document.getElementById('piceLst');

            data.forEach( el => {
                lst.innerHTML += `<li>ID: ${el.id}, Ime: ${el.ime}, Cena: ${el.cena}</li>`;
            });
        });
    });

    document.getElementById('stoloviBtnIz').addEventListener('click', e => {
        e.preventDefault();
        
        const data = {
            id: document.getElementById('idHrIz').value,
            stolice: document.getElementById('stoliceStIz').value
        };

        document.getElementById('idStIz').value = '';
        document.getElementById('stoliceStIz').value = '';

        fetch('http://localhost:8000/admin/stolovi/'+ data.id, {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token}` 
            },
            body: JSON.stringify(data)
        })
            .then( res => res.json() )
            .then( data => {
                const lst = document.getElementById('stoloviLst');

            data.forEach( el => {
                lst.innerHTML += `<li>ID: ${el.id}, Br. stolica: ${el.stolice}</li>`;
            });
            });
    });

    document.getElementById('hranaBtnIzbrisi').addEventListener('click', e => {
        e.preventDefault();
        
        const data = {
            id: document.getElementById('idHrIzbrisi').value,
        };

        document.getElementById('idHrIzbrisi').value = '';

        fetch('http://localhost:8000/admin/hrana/'+ data.id, {
            method: 'DELETE',
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token}` 
            },
            body: JSON.stringify(data)
        })
            .then( res => res.json() )
            .then( data => {
                const lst = document.getElementById('hranaLst');

                data.forEach( el => {
                    const lst = document.getElementById('hranaLst');

                data.forEach( el => {
                lst.innerHTML += `<li>ID: ${el.id}, Ime: ${el.ime}, Sastojci: ${el.sastojci}, Cena: ${el.cena}</li>`;
                });
                });
            });
    });

    document.getElementById('piceBtnIzbrisi').addEventListener('click', e => {
        e.preventDefault();
        
        const data = {
            id: document.getElementById('idPiceIzbrisi').value,
        };

        document.getElementById('idPiceIzbrisi').value = '';

        fetch('http://localhost:8000/admin/pice/'+ data.id, {
            method: 'DELETE',
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token}` 
            },
            body: JSON.stringify(data)
        })
            .then( res => res.json() )
            .then( data => {
                const lst = document.getElementById('piceLst');

            data.forEach( el => {
                lst.innerHTML += `<li>ID: ${el.id}, Ime: ${el.ime}, Cena: ${el.cena}</li>`;
            });
        });
    });

    document.getElementById('stoloviBtnIzbrisi').addEventListener('click', e => {
        e.preventDefault();
        
        const data = {
            id: document.getElementById('idStoloviIzbrisi').value,
        };

        document.getElementById('idStoloviIzbrisi').value = '';

        fetch('http://localhost:8000/admin/stolovi/'+ data.id, {
            method: 'DELETE',
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token}` 
            },
            body: JSON.stringify(data)
        })
            .then( res => res.json() )
            .then( data => {
                const lst = document.getElementById('stoloviLst');

            data.forEach( el => {
                lst.innerHTML += `<li>ID: ${el.id}, Br. stolica: ${el.stolice}</li>`;
                });
            });
    });

    document.getElementById('logout').addEventListener('click', e => {
        document.cookie = `token=;SameSite=Lax`;
    });
}