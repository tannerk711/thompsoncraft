import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const runtime = 'nodejs';
export const alt = 'Thompson Craft LLC - Professional Junk Removal in Rio Rancho & Central New Mexico';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), 'public', 'thompson-craft-logo.png')
  );
  const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          padding: '60px',
        }}
      >
        <img
          src={logoBase64}
          alt="Thompson Craft LLC"
          width={500}
          height={350}
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
