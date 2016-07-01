(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this));

		_this.state = {
			appName: 'ReactStarter'
		};
		return _this;
	}

	_createClass(App, [{
		key: 'renderContents',
		value: function renderContents() {
			var appName = this.state.appName;


			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h1',
					null,
					'Hello, ',
					appName
				),
				_react2.default.createElement(
					'p',
					null,
					'includes'
				),
				_react2.default.createElement(
					'ul',
					null,
					_react2.default.createElement(
						'li',
						{ key: 'k1' },
						'react'
					),
					_react2.default.createElement(
						'li',
						{ key: 'k2' },
						'reactDOM'
					),
					_react2.default.createElement(
						'li',
						{ key: 'k3' },
						'reflux'
					),
					_react2.default.createElement(
						'li',
						{ key: 'k4' },
						'jQuery ($)'
					),
					_react2.default.createElement(
						'li',
						{ key: 'k5' },
						'lodash (_)'
					),
					_react2.default.createElement(
						'li',
						{ key: 'k6' },
						'semantic-ui'
					)
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				this.renderContents()
			);
		}
	}]);

	return App;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('contents'));

},{"react":"react","react-dom":"react-dom"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUNBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTSxHOzs7QUFDTCxnQkFBYztBQUFBOztBQUFBOztBQUViLFFBQUssS0FBTCxHQUFhO0FBQ1osWUFBVTtBQURFLEdBQWI7QUFGYTtBQUtiOzs7O21DQUVnQjtBQUFBLE9BQ1gsT0FEVyxHQUNBLEtBQUssS0FETCxDQUNYLE9BRFc7OztBQUdoQixVQUFPO0FBQUE7QUFBQTtBQUNOO0FBQUE7QUFBQTtBQUFBO0FBQVk7QUFBWixLQURNO0FBRU47QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUZNO0FBR047QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBLFFBQUksS0FBSSxJQUFSO0FBQUE7QUFBQSxNQUREO0FBRUM7QUFBQTtBQUFBLFFBQUksS0FBSSxJQUFSO0FBQUE7QUFBQSxNQUZEO0FBR0M7QUFBQTtBQUFBLFFBQUksS0FBSSxJQUFSO0FBQUE7QUFBQSxNQUhEO0FBSUM7QUFBQTtBQUFBLFFBQUksS0FBSSxJQUFSO0FBQUE7QUFBQSxNQUpEO0FBS0M7QUFBQTtBQUFBLFFBQUksS0FBSSxJQUFSO0FBQUE7QUFBQSxNQUxEO0FBTUM7QUFBQTtBQUFBLFFBQUksS0FBSSxJQUFSO0FBQUE7QUFBQTtBQU5EO0FBSE0sSUFBUDtBQVlBOzs7MkJBRVE7QUFDUixVQUFPO0FBQUE7QUFBQTtBQUFNLFNBQUssY0FBTDtBQUFOLElBQVA7QUFDQTs7OztFQTNCZ0IsZ0JBQU0sUzs7QUE4QnhCLG1CQUFTLE1BQVQsQ0FBZ0IsOEJBQUMsR0FBRCxPQUFoQixFQUF3QixTQUFTLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBeEIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JzsgXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHsgXG5cdGNvbnN0cnVjdG9yKCkgeyBcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRhcHBOYW1lIDogJ1JlYWN0U3RhcnRlcicgXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyQ29udGVudHMoKSB7IFxuXHRcdGxldCB7YXBwTmFtZX0gPSB0aGlzLnN0YXRlOyBcblxuXHRcdHJldHVybiA8ZGl2PlxuXHRcdFx0PGgxPkhlbGxvLCB7YXBwTmFtZX08L2gxPlxuXHRcdFx0PHA+aW5jbHVkZXM8L3A+XG5cdFx0XHQ8dWw+XG5cdFx0XHRcdDxsaSBrZXk9J2sxJz5yZWFjdDwvbGk+XG5cdFx0XHRcdDxsaSBrZXk9J2syJz5yZWFjdERPTTwvbGk+XG5cdFx0XHRcdDxsaSBrZXk9J2szJz5yZWZsdXg8L2xpPlxuXHRcdFx0XHQ8bGkga2V5PSdrNCc+alF1ZXJ5ICgkKTwvbGk+XG5cdFx0XHRcdDxsaSBrZXk9J2s1Jz5sb2Rhc2ggKF8pPC9saT5cblx0XHRcdFx0PGxpIGtleT0nazYnPnNlbWFudGljLXVpPC9saT5cblx0XHRcdDwvdWw+XG5cdFx0PC9kaXY+OyBcblx0fVxuXG5cdHJlbmRlcigpIHsgXG5cdFx0cmV0dXJuIDxkaXY+e3RoaXMucmVuZGVyQ29udGVudHMoKX08L2Rpdj47IFxuXHR9XG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50cycpKTtcbiJdfQ==
