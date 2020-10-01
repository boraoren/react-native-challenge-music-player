/*
    https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds
    thanks vishal (https://stackoverflow.com/users/197473/vishal)
*/

export const timeInMinutesAndSeconds = (duration: number) => {
    const hrs = ~~(duration / 3600);
    const mins = ~~((duration % 3600 ) / 60);
    const secs = ~~duration % 60;

    let ret = '';

    if(hrs > 0) {
        ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
    }

    ret += '' + mins + ':' + (secs < 10 ? '0' : '');
    ret += '' + secs;

    return ret;
    
}