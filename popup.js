var window = window;

var canvas = window.document.createElement ('canvas');
var context = canvas.getContext ('2d');

var game =
{
	canvas:
	{
		load: function ()
		{
			game.canvas.resize ();
			window.document.body.appendChild (canvas);
		},

		resize: function ()
		{
			canvas.height = 100;
			canvas.width = 100;
		}
	},

	load: function ()
	{
		game.window.load ();		
	},

	window:
	{
		load: function ()
		{
			window.onload = function ()
			{
				game.canvas.load ();
			};
		}
	}
};

game.load ();