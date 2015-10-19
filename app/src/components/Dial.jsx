import ReactCSS from 'reactcss';

class Dial extends ReactCSS.Component {
  constructor() {
    super();

  }

  render() {
    var useTag = '<use xlink:href="#piechart" mask="url(#piemask)" />'
    return (
      <div className="percentages">
        <svg
          className="percentages-title"
          fill="#3498db"
          width="200px"
          height="200px"
          viewBox="0 0 1 1"
          dangerouslySetInnerHTML={{__html: useTag }}>
          <text
            x="0.5"
            y="0.5"
            font-family="Roboto"
            font-size="0.3"
            fill="#888"
            text-anchor="middle"
            dy="0.1">
            33
            <tspan font-size="0.2" dy="-0.07">%</tspan>
          </text>
        </svg>
        <p className="percentages-title">Distractedness</p>
      </div>

    )
  }
}
