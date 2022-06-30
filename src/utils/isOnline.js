
export const online = (online) => {
    let color = 'rgb(176, 16, 16)';
    
    if (online === true) {
        color = 'rgb(27, 188, 83)';
    }
    return color
}