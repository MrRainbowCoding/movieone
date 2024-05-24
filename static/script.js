const contentFrame = document.getElementById('contentFrame')


function test(num) {
    if (num === '1') {
        window.alert('1 Works')
    } else {
        if (num === '2') {
            window.alert('2 Works!')
        }
    }
}

function frameRdir(name) {
    if (name === 'sf') {
        contentFrame.src = 'https://sudo-flix.lol'
    }
    if (name === 'google') {
        contentFrame.src = 'https://google.com'
    }
    }