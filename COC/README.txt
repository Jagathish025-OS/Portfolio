# Jagathish COC

This `/COC` frontend connects to the existing Render Node backend:

`https://jagathish-backend.onrender.com`

## Current flow

1. User selects only a Town Hall.
2. Browser loads verified CoC game data from `/api/coc/game-data`.
3. "AI Generate Army" calls `/api/coc/generate-army`.
4. The backend sends verified Town Hall data to OpenRouter.
5. The backend validates the returned army before the browser displays it.
6. The UI shows Army Camp, Spells, Siege Machine, Clan Castle, Heroes, Pets, Equipment and Attack Guide.

## Deploy

Upload/replace the `COC` folder in the same Portfolio deployment that serves:

- `/`
- `/AZ`
- `/COC`

No API key is stored in this frontend.

## Notes

The CoC data source is community-maintained and is not an official Supercell API. The backend is the authority for the data used by the generator.


## v4 fix
The frontend first loads live data from the Render Node backend. If the browser cannot reach the backend, it falls back to the bundled structured dataset for Town Hall stats so the page does not remain blank. AI army generation continues to require the backend and is never generated from the fallback.
