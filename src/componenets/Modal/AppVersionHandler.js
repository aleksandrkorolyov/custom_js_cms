

const AppVersionHandler = () => {

    const versionCompare = function(left, right) {

        if (typeof left + typeof right != 'stringstring')
            return false;
        
        var a = left.split('.')
        ,   b = right.split('.')
        ,   i = 0, len = Math.max(a.length, b.length);
            
        for (; i < len; i++) {
            if ((a[i] && !b[i] && parseInt(a[i]) > 0) || (parseInt(a[i]) > parseInt(b[i]))) {
                return 1;
            } else if ((b[i] && !a[i] && parseInt(b[i]) > 0) || (parseInt(a[i]) < parseInt(b[i]))) {
                return -1;
            }
        }
        
        return 0;
    }

    const handleAppVersion = (version) => {
            const appVersion = localStorage.getItem('x-version');
            
            if(appVersion === null) {
                setAppVersion(version);
            }

            const updateAvaliable = versionCompare(version , appVersion);
            
            if (updateAvaliable == 1) {
                console.log('Update avaliable')
                localStorage.setItem('x-version', version);
                localStorage.setItem('version-update-needed', true);
            }
    }

    const setAppVersion = (value) => {
        localStorage.setItem('x-version', value)
        }

    return { handleAppVersion }
    
}

export default AppVersionHandler;