const express = require('express');

const reverieApp = express();

reverieApp.get('/api/hosts', (req, res) => {
    const hosts = [
        { id: 1, date_added: '05/21/2018', first_active: '05/22/2018', current_name: 'Dolores Abernathy', height: 58.00, weight: 200, intelligence_metric: 15 },
        { id: 1, date_added: '05/21/2018', first_active: '05/22/2018', current_name: 'Teddy Flood', height: 58.00, weight: 200, intelligence_metric: 15 },
        { id: 1, date_added: '05/21/2018', first_active: '05/22/2018', current_name: 'Bernard Lowe', height: 58.00, weight: 200, intelligence_metric: 15 },
    ];

    res.json(hosts);
});

const port = 5000;

reverieApp.listen(port, () => `Server running on port ${port}`);