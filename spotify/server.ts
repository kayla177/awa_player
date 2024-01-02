// // const express = require('express');
// // const fetch = require('node-fetch');

// // const app = express();
// // const PORT = process.env.PORT || 3000;


// // app.use((req, res, next) => {
// //   req.supabaseApiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0ZWtuZHVodm9jYmlvcXNhZHNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMyMjA2MDgsImV4cCI6MjAxODc5NjYwOH0.cM-KAxs0gRKv3F7LZxR9eU8jvk7wt2u7PHpLSTYGOUU';
// //   next();
// // });


// // app.get('/api/songs/:id', async (req, res) => {
// //   const { id } = req.params;
// //   const apiUrl = `https://hteknduhvocbioqsadsp.supabase.co/rest/v1/songs?select=*&id=eq.${id}`;

// //   try {
// //     const response = await fetch(apiUrl, {
// //       headers: {
// //         'apikey': req.supabaseApiKey,
// //         'Content-Type': 'application/json',
// //       },
// //     });

// //     const data = await response.json();
// //     res.json(data);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ error: 'Internal Server Error' });
// //   }
// // });

// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}`);
// // });


// import { Application, Router } from "https://deno.land/std@1.39.1/assert/mod.ts";


// const app = new Application();
// const router = new Router();

// const corsHeaders = {
//   "Access-Control-Allow-Origin": "*",
//   "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
//   "Access-Control-Allow-Methods": "OPTIONS, GET, POST, PUT, DELETE",
// };

// router.options("/*", (context) => {
//   context.response.headers.set("Allow", "OPTIONS, GET, POST, PUT, DELETE");
//   context.response.headers.set("Access-Control-Allow-Origin", "*");
//   context.response.headers.set("Access-Control-Allow-Headers", "Content-Type");
//   context.response.status = 200;
// });

// app.use(router.routes());
// app.use(router.allowedMethods());

// // Other routes and middleware can be added here

// const PORT = 3000;
// console.log(`Server running on http://localhost:${PORT}`);

// await app.listen({ port: PORT });

