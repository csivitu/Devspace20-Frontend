import React from 'react';
import './App.scss';
import $ from 'jquery';


class App extends React.Component {
  componentDidMount() {
      $(window).scroll(function () {

        var $window = $(window),
          $body = $('body'),
          $panel = $('.panel'),
        $icon = $('.icon');

        var scroll = $window.scrollTop() + ($window.height() / 3);

        $panel.each(function () {
          var $this = $(this);

          if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

            $body.removeClass(function (index, css) {
              return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
            });

            $icon.removeClass(function (index, css) {
              return (css.match(/(^|\s)icon-\S+/g) || []).join(' ');
            });

            $body.addClass('color-' + $(this).data('color'));
            $icon.addClass('icon-' + $(this).data('color'));
          }
        });

      }).scroll();
  }
  render() {
    return (
      <div className="App">
        <div class="panel" data-color="white">
          <div className="devspace">
            <span className="icon"></span>
            <div className="soon">coming soon</div>
          </div>
        </div>
        <div className="panel" data-color="violet">
        </div>
        <div className="panel" data-color="indigo">
        </div>
        <div className="panel" data-color="blue">
        </div>
        <div className="panel" data-color="green">
        </div>
        <div className="panel" data-color="yellow">
        </div>
        <div className="panel" data-color="orange">
        </div>
        <div className="panel" data-color="red">
          <div className="center">
            <div className="footer" >Take a look at Devspace 2019 <a href="https://devspace.csivit.com/2019">here</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
