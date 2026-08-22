const {app,BrowserWindow,shell}=require('electron');
const APP_URL='https://franckguihikonhi-sketch.github.io/FNE-SAGE/';

function createWindow(){
  const win=new BrowserWindow({
    width:1280,
    height:840,
    minWidth:900,
    minHeight:650,
    title:'FNE Sage',
    autoHideMenuBar:true,
    webPreferences:{contextIsolation:true,nodeIntegration:false,sandbox:true}
  });
  win.webContents.setWindowOpenHandler(({url})=>{
    if(url.startsWith('https://'))shell.openExternal(url);
    return{action:'deny'};
  });
  win.loadURL(APP_URL);
}

app.whenReady().then(()=>{
  createWindow();
  app.on('activate',()=>{if(BrowserWindow.getAllWindows().length===0)createWindow()});
});
app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit()});

