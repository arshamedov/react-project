import React, { useEffect } from 'react';
import './style.css';

const Home: React.FC = (): JSX.Element => {
    useEffect(() => {
        const canvas = document.getElementById('gridCanvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
        const tooltip = document.getElementById('tooltip') as HTMLDivElement;
        const message = document.getElementById('message') as HTMLDivElement;

        const rows = 8;
        const cols = 15;
        const radius = 10;
        const padd = 5;
        const offsetX = 30;
        const offsetY = 30;

        let grid: Array<Array<{ x: number, y: number, color: string, clicked: boolean }>> = [];
        let messageTimeout: NodeJS.Timeout;

        function createGrid() {
            grid = [];
            for (let r = 0; r < rows; r++) {
                let row = [];
                let currentCols = cols;

                if (r === 5) currentCols = 12;
                else if (r === 6 || r === 7) currentCols = 8;

                let rowOffsetX = (canvas.width - (currentCols * (2 * radius + padd) - padd)) / 2;

                for (let c = 0; c < currentCols; c++) {
                    row.push({ x: rowOffsetX + c * (2 * radius + padd), y: offsetY + r * (2 * radius + padd), color: 'white', clicked: false });
                }
                grid.push(row);
            }
        }

        function drawGrid() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            grid.forEach((row, r) => {
                ctx.fillStyle = 'black';
                ctx.textAlign = 'right';
                ctx.textBaseline = 'middle';
                ctx.fillText(`${r + 1}`, offsetX - (radius + padd), offsetY + r * (2 * radius + padd));

                row.forEach((cell, c) => {
                    ctx.beginPath();
                    ctx.arc(cell.x, cell.y, radius, 0, Math.PI * 2);
                    ctx.fillStyle = cell.color;
                    ctx.fill();
                    ctx.stroke();
                });
            });
        }

        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            let found = false;

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < grid[r].length; c++) {
                    let cell = grid[r][c];
                    if (Math.sqrt((x - cell.x) ** 2 + (y - cell.y) ** 2) < radius) {
                        if (!cell.clicked) {
                            cell.color = 'orange';
                        }
                        tooltip.style.visibility = 'visible';
                        tooltip.style.left = `${e.clientX}px`;
                        tooltip.style.top = `${e.clientY - 30}px`;
                        tooltip.innerHTML = `Row: ${r + 1}, Column: ${c + 1}`;
                        found = true;
                    } else if (!cell.clicked) {
                        cell.color = 'white';
                    }
                }
            }

            if (!found) {
                tooltip.style.visibility = 'hidden';
            }

            drawGrid();
        });

        canvas.addEventListener('click', (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < grid[r].length; c++) {
                    let cell = grid[r][c];
                    if (Math.sqrt((x - cell.x) ** 2 + (y - cell.y) ** 2) < radius) {
                        if (!cell.clicked) {
                            cell.color = 'orange';
                            cell.clicked = true;
                            message.innerHTML = `Booked: Row ${r + 1}, Column ${c + 1}`;
                        } else {
                            cell.color = 'white';
                            cell.clicked = false;
                            message.innerHTML = `Booking canceled: Row ${r + 1}, Column ${c + 1}`;
                        }

                        if (messageTimeout) {
                            clearTimeout(messageTimeout);
                        }

                        messageTimeout = setTimeout(() => {
                            message.innerHTML = '';
                        }, 2000);
                    }
                }
            }

            drawGrid();
        });

        createGrid();
        drawGrid();

        return () => {
            canvas.removeEventListener('mousemove', () => { });
            canvas.removeEventListener('click', () => { });
        };
    }, []);

    return (
        <div className="container">
            <header className="header">
                <h1>Ticket Booking</h1>
            </header>
            <main className="main">
                <div className="canvas-container">
                    <canvas id="gridCanvas" width="800" height="400"></canvas>
                    <div id="tooltip" className="tooltip"></div>
                </div>
                <div id="message" className="message"></div>
            </main>
            <footer className="footer">
                <p>&copy; 2024 Ticket Booking Inc.</p>
            </footer>
        </div>
    );
}

export default Home;
