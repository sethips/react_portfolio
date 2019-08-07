import React from 'react';
import './project-banner.styles..scss';

class ProjectsBanner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1,
      title: 'Monsters Rolodex',
      text: 'React project using fetch api and others',
      url: '../../assets/projects/rolodex.jpg'
    };
  }

  render() {
    return (
      <div className='banner-container'>
        <img src={this.state.url} styles='width:500px;' />

        <div className='prj-index'>
          <ul>
            <li>
              <img src='${this.state.url}' alt='heroimage' />
              <h1>{this.state.title}</h1>
              <p>{this.state.text}</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProjectsBanner;
