const net = require('net');

const server = net.createServer(socket => {
    console.log('Client connected');

    const simulateDataInterval = setInterval(() => {
        const simulatedWeight = Math.random() * 1000;
        console.log(simulatedWeight);
        console.log('Simulated weight:', simulatedWeight);
        socket.write(simulatedWeight.toFixed(2) + '\n');
    }, 2000);

    socket.on('end', () => {
        clearInterval(simulateDataInterval);
        console.log('Client disconnected');
    });

    socket.on('error', err => {
        console.error('Socket error:', err);
    });
});

const PORT = 3002;
server.listen(PORT, () => {
    console.log(`TCP server listening on port ${PORT}`);
});