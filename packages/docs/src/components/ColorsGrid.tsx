import { colors } from '@ignite-ui/tokens'
import { getContrast } from 'polished'

function getContrastingColor(
  color: string,
  backgroundColor: string,
): '#000' | '#FFF' {
  return getContrast(color, backgroundColor) < 3.5 ? '#000' : '#FFF'
}

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => (
    <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'monospace',
          color: getContrastingColor(color, '#FFF'),
        }}
      >
        <strong>${key}</strong>
        <span>{color}</span>
      </div>
    </div>
  ))
}
