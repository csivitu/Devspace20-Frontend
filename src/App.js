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
          <div class="devspace">
            <span class="icon"></span>
            <div class="soon">coming soon</div>
          </div>
        </div>
        <div class="panel" data-color="violet">
          <h2></h2>
        </div>
        <div class="panel" data-color="indigo">
          <h2></h2>
        </div>
        <div class="panel" data-color="blue">
          <h2></h2>
        </div>
        <div class="panel" data-color="green">
          <h2></h2>
        </div>
        <div class="panel" data-color="yellow">
          <h2></h2>
        </div>
        <div class="panel" data-color="orange">
          <h2></h2>
        </div>
        <div class="panel" data-color="red">
          <div class="center">
            <div class="footer" >Take a look at Devspace 2019
                            <a href="https://devspace.csivit.com">here</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
