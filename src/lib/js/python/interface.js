function interface_OpenURL(url) {
    alert('Please check your browser window.')
    window.pywebview.api.OpenURL_INT(url).then(response => {
        console.log('Done.')
    }).catch(err => {
        alert("Error calling API");
    });
}