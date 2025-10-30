window.addEventListener('DOMContentLoaded', () => {
    viewer.container.addEventListener('click', function (event) {
        const mouse = new THREE.Vector2();
        mouse.x = (event.clientX / viewer.container.clientWidth) * 2 - 1;
        mouse.y = -(event.clientY / viewer.container.clientHeight) * 2 + 1;

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, viewer.camera);

        const intersects = raycaster.intersectObject(panorama, true);
        if (intersects.length > 0) {
            const point = intersects[0].point;
            const x = Math.floor(point.x);
            const y = Math.floor(point.y);
            const z = Math.floor(point.z);
            alert(`Coordenadas: (${x}, ${y}, ${z})`);
            console.log(`Coordenadas: (${x}, ${y}, ${z})`);
        }
    });
});