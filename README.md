# firefox-pdf-rip

A script for ripping pdfs. This will even work for copy locked pdfs

Setup:

- This script uses firefox's inbuilt image saving. Ensure your download settings are set to "Save files to" and NOT "Always ask where to save files". Ideally, change your save folder to a new empty folder.
- Open the pdf in firefox
- To get the best quality, set the zoom level appropriately. 100% will be the natural size of the page, but if you're lucky your pdf will have vector graphics and it can go as large as you like. The size of the downloaded image will be the size of the page in FF, so adjust to your specifications.
- Open the web inspector (ctrl + shift + c in windows) and go to the console tab.
- paste the code from pdf_rip.js in the console.
- Wait

The script reads through each page and stores it in memory. Yes this can get slow if there's a lot of big pages. This was hacked together in a couple of hours, so it's pretty rough around the edges. 

Also if your computer is slow, it might miss some pages as they may not load. FF only loads up to 10 pages at any one time, discarding one and thenn loading the next as required. Since you (should) be loading from your local drive this shouldn't be too much of an issue, but if you have a huge pdf memory might become a problem near the end. 
