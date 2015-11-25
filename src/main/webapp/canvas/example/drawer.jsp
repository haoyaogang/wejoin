<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title>Drawingboard.js: a simple canvas based drawing app that you can integrate easily on your website.</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width">

		<link rel="stylesheet" href="${pageContext.request.contextPath}/canvas/example/prism.css">
		<link rel="stylesheet" href="${pageContext.request.contextPath}/canvas/example/website.css">


		<!-- in a production environment, you can include the minified css. It contains the css of the board and the default controls (size, nav, colors):
		<link rel="stylesheet" href="../dist/drawingboard.min.css"> -->
		<link rel="stylesheet" href="${pageContext.request.contextPath}/canvas/css/drawingboard.css">

		<style>
		/*
		* drawingboards styles: set the board dimensions you want with CSS
		*/

		.board {
			margin: 0 auto;
			width: 300px;
			height: 300px;
		}

		#default-board {
			width: 700px;
			height: 580px;
		}

		/* custom board styles for the title? no problem*/
		#title-board .drawing-board-canvas-wrapper {
			border: none;
			margin: 0;
		}
		</style>
	</head>
	<body>
	<%
	String houseId = request.getParameter("houseId");
	String channelId = request.getParameter("channelId");
%>

		<div class="board" id="default-board"></div>
		
		<script type='text/javascript' src="${pageContext.request.contextPath}/canvas/example/jquery-1.8.3.js"></script>

		<!-- in a production environment, just include the minified script. It contains the board and the default controls (size, nav, colors, download): -->
		<!--<script src="../dist/drawingboard.min.js"></script>-->

		<script src="${pageContext.request.contextPath}/canvas/js/drawingboard.js"></script>
		<script src="${pageContext.request.contextPath}/canvas/js/board.js"></script>
		<script src="${pageContext.request.contextPath}/canvas/js/controls/control.js"></script>
		<script src="${pageContext.request.contextPath}/canvas/js/controls/color.js"></script>
		<script src="${pageContext.request.contextPath}/canvas/js/controls/drawingmode.js"></script>
		<script src="${pageContext.request.contextPath}/canvas/js/controls/navigation.js"></script>
		<script src="${pageContext.request.contextPath}/canvas/js/controls/size.js"></script>
		<script src="${pageContext.request.contextPath}/canvas/js/controls/download.js"></script>
		<script src="${pageContext.request.contextPath}/canvas/js/utils.js"></script>



		<script data-example="1">
			//create the drawingboard by passing it the #id of the wanted container
			var defaultBoard = new DrawingBoard.Board('default-board');
		</script>
	</body>
</html>