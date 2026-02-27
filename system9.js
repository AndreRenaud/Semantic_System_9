    (function() {
        let dragTarget = null;
        let startX, startY, origLeft, origTop;
        let topZ = 10;

        document.addEventListener('mousedown', function(e) {
            // Find if click is on a title bar (h1:first-child inside a main > section)
            const titleBar = e.target.closest('main > section > h1:first-child');
            if (!titleBar) return;

            const section = titleBar.closest('section');
            if (!section) return;

            e.preventDefault();
            dragTarget = section;

            // Bring to front
            topZ++;
            section.style.zIndex = topZ;

            startX = e.clientX;
            startY = e.clientY;
            origLeft = section.offsetLeft;
            origTop = section.offsetTop;

            document.body.style.userSelect = 'none';
        });

        document.addEventListener('mousemove', function(e) {
            if (!dragTarget) return;
            e.preventDefault();
            dragTarget.style.left = (origLeft + e.clientX - startX) + 'px';
            dragTarget.style.top  = (origTop  + e.clientY - startY) + 'px';
        });

        document.addEventListener('mouseup', function() {
            if (!dragTarget) return;
            dragTarget = null;
            document.body.style.userSelect = '';
        });
    })();
