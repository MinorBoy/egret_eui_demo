window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","MainScene":"resource/skins/MainScene.exml","PlayerScene":"resource/skins/PlayerScene.exml","HeroScene":"resource/skins/HeroScene.exml","GoodsScene":"resource/skins/GoodsScene.exml","AboutScene":"resource/skins/AboutScene.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/skins/AboutScene.exml'] = window.AboutSceneSkin = (function (_super) {
	__extends(AboutSceneSkin, _super);
	var AboutSceneSkin$Skin1 = 	(function (_super) {
		__extends(AboutSceneSkin$Skin1, _super);
		function AboutSceneSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","close_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AboutSceneSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "close_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return AboutSceneSkin$Skin1;
	})(eui.Skin);

	function AboutSceneSkin() {
		_super.call(this);
		this.skinParts = ["btn_close","lab_about"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.btn_close_i(),this.lab_about_i()];
	}
	var _proto = AboutSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bgListPage_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "about-bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "about_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.label = "";
		t.x = 394;
		t.y = 214;
		t.skinName = AboutSceneSkin$Skin1;
		return t;
	};
	_proto.lab_about_i = function () {
		var t = new eui.Label();
		this.lab_about = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.text = "";
		t.width = 196;
		t.x = 198;
		t.y = 310;
		return t;
	};
	return AboutSceneSkin;
})(eui.Skin);generateEUI.paths['resource/skins/GoodsScene.exml'] = window.GoodsSceneSkin = (function (_super) {
	__extends(GoodsSceneSkin, _super);
	var GoodsSceneSkin$Skin2 = 	(function (_super) {
		__extends(GoodsSceneSkin$Skin2, _super);
		function GoodsSceneSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",100),
						new eui.SetProperty("_Image1","percentHeight",100),
						new eui.SetProperty("_Image1","source","btnReturn_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GoodsSceneSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 90;
			t.horizontalCenter = 0;
			t.source = "btnReturn_png";
			t.verticalCenter = 0;
			t.percentWidth = 90;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GoodsSceneSkin$Skin2;
	})(eui.Skin);

	var GoodsSceneSkin$Skin3 = 	(function (_super) {
		__extends(GoodsSceneSkin$Skin3, _super);
		var GoodsSceneSkin$Skin3$Skin4 = 		(function (_super) {
			__extends(GoodsSceneSkin$Skin3$Skin4, _super);
			function GoodsSceneSkin$Skin3$Skin4() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this.thumb_i()];
			}
			var _proto = GoodsSceneSkin$Skin3$Skin4.prototype;

			_proto.thumb_i = function () {
				var t = new eui.Image();
				this.thumb = t;
				t.scale9Grid = new egret.Rectangle(1,1,4,4);
				t.source = "hScrollBar01_png";
				t.width = 8;
				return t;
			};
			return GoodsSceneSkin$Skin3$Skin4;
		})(eui.Skin);

		function GoodsSceneSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = GoodsSceneSkin$Skin3.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.percentHeight = 100;
			t.minHeight = 100;
			t.right = 0;
			t.width = 8;
			t.skinName = GoodsSceneSkin$Skin3$Skin4;
			return t;
		};
		return GoodsSceneSkin$Skin3;
	})(eui.Skin);

	function GoodsSceneSkin() {
		_super.call(this);
		this.skinParts = ["btn_return","list_goods","scr_goods"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.btn_return_i(),this.scr_goods_i()];
	}
	var _proto = GoodsSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bgListPage_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "goodsTitle_png";
		t.y = 134;
		return t;
	};
	_proto.btn_return_i = function () {
		var t = new eui.Button();
		this.btn_return = t;
		t.label = "";
		t.x = 16;
		t.y = 130;
		t.skinName = GoodsSceneSkin$Skin2;
		return t;
	};
	_proto.scr_goods_i = function () {
		var t = new eui.Scroller();
		this.scr_goods = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 512.67;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.width = 450.67;
		t.x = 16;
		t.y = 184;
		t.skinName = GoodsSceneSkin$Skin3;
		t.viewport = this.list_goods_i();
		return t;
	};
	_proto.list_goods_i = function () {
		var t = new eui.List();
		this.list_goods = t;
		t.itemRendererSkinName = goodsListItem;
		return t;
	};
	return GoodsSceneSkin;
})(eui.Skin);generateEUI.paths['resource/skins/HeroScene.exml'] = window.HeroSceneSkin = (function (_super) {
	__extends(HeroSceneSkin, _super);
	var HeroSceneSkin$Skin5 = 	(function (_super) {
		__extends(HeroSceneSkin$Skin5, _super);
		function HeroSceneSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",100),
						new eui.SetProperty("_Image1","percentHeight",100),
						new eui.SetProperty("_Image1","source","btnReturn_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HeroSceneSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 90;
			t.horizontalCenter = 0;
			t.source = "btnReturn_png";
			t.verticalCenter = 0;
			t.percentWidth = 90;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HeroSceneSkin$Skin5;
	})(eui.Skin);

	var HeroSceneSkin$Skin6 = 	(function (_super) {
		__extends(HeroSceneSkin$Skin6, _super);
		function HeroSceneSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",100),
						new eui.SetProperty("_Image1","percentHeight",100),
						new eui.SetProperty("_Image1","source","btnOK_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = HeroSceneSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 90;
			t.horizontalCenter = 0;
			t.source = "btnOK_png";
			t.verticalCenter = 0;
			t.percentWidth = 90;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return HeroSceneSkin$Skin6;
	})(eui.Skin);

	var HeroSceneSkin$Skin7 = 	(function (_super) {
		__extends(HeroSceneSkin$Skin7, _super);
		var HeroSceneSkin$Skin7$Skin8 = 		(function (_super) {
			__extends(HeroSceneSkin$Skin7$Skin8, _super);
			function HeroSceneSkin$Skin7$Skin8() {
				_super.call(this);
				this.skinParts = ["thumb"];
				
				this.elementsContent = [this.thumb_i()];
			}
			var _proto = HeroSceneSkin$Skin7$Skin8.prototype;

			_proto.thumb_i = function () {
				var t = new eui.Image();
				this.thumb = t;
				t.scale9Grid = new egret.Rectangle(1,1,4,4);
				t.source = "hScrollBar01_png";
				t.width = 8;
				return t;
			};
			return HeroSceneSkin$Skin7$Skin8;
		})(eui.Skin);

		function HeroSceneSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["verticalScrollBar"];
			
			this.elementsContent = [this.verticalScrollBar_i()];
		}
		var _proto = HeroSceneSkin$Skin7.prototype;

		_proto.verticalScrollBar_i = function () {
			var t = new eui.VScrollBar();
			this.verticalScrollBar = t;
			t.percentHeight = 100;
			t.minHeight = 100;
			t.right = 0;
			t.width = 8;
			t.skinName = HeroSceneSkin$Skin7$Skin8;
			return t;
		};
		return HeroSceneSkin$Skin7;
	})(eui.Skin);

	function HeroSceneSkin() {
		_super.call(this);
		this.skinParts = ["btn_return","btn_select","list_hero","scr_hero"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.btn_return_i(),this.btn_select_i(),this.scr_hero_i()];
	}
	var _proto = HeroSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "commonBg_jpg";
		t.verticalCenter = -2;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "herosTitle_png";
		t.y = 133.04;
		return t;
	};
	_proto.btn_return_i = function () {
		var t = new eui.Button();
		this.btn_return = t;
		t.label = "";
		t.x = 16.37;
		t.y = 129.1;
		t.skinName = HeroSceneSkin$Skin5;
		return t;
	};
	_proto.btn_select_i = function () {
		var t = new eui.Button();
		this.btn_select = t;
		t.label = "";
		t.x = 379.05;
		t.y = 129.04;
		t.skinName = HeroSceneSkin$Skin6;
		return t;
	};
	_proto.scr_hero_i = function () {
		var t = new eui.Scroller();
		this.scr_hero = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 499.55;
		t.rotation = 359.8;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.width = 448.99;
		t.x = 13.33;
		t.y = 185;
		t.skinName = HeroSceneSkin$Skin7;
		t.viewport = this.list_hero_i();
		return t;
	};
	_proto.list_hero_i = function () {
		var t = new eui.List();
		this.list_hero = t;
		t.itemRendererSkinName = heroListItem;
		return t;
	};
	return HeroSceneSkin;
})(eui.Skin);generateEUI.paths['resource/skins/skins_item/mbtnPlayer.exml'] = window.mbtnPlayer = (function (_super) {
	__extends(mbtnPlayer, _super);
	function mbtnPlayer() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.height = 80;
		this.width = 111;
		this.elementsContent = [];
		this._Image1_i();
		
		this._Image2_i();
		
		this._Image3_i();
		
		this._Image4_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("_Image3","",1,""),
					new eui.AddItems("_Image4","",1,"")
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image1","",0,""),
					new eui.AddItems("_Image2","",1,"")
				])
		];
	}
	var _proto = mbtnPlayer.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.source = "mbtn_BgFc_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.source = "mbtnPlayer_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.horizontalCenter = 0;
		t.source = "mbtn_Bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.horizontalCenter = 0;
		t.source = "mbtnPlayer_png";
		t.verticalCenter = 0;
		return t;
	};
	return mbtnPlayer;
})(eui.Skin);generateEUI.paths['resource/skins/skins_item/mbtnHero.exml'] = window.mbtnHero = (function (_super) {
	__extends(mbtnHero, _super);
	function mbtnHero() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.height = 300;
		this.width = 400;
		this.elementsContent = [];
		this._Image1_i();
		
		this._Image2_i();
		
		this._Image3_i();
		
		this._Image4_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("_Image3","",1,""),
					new eui.AddItems("_Image4","",1,""),
					new eui.SetProperty("","width",111),
					new eui.SetProperty("","height",80)
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image1","",0,""),
					new eui.AddItems("_Image2","",1,""),
					new eui.SetProperty("","width",111),
					new eui.SetProperty("","height",80)
				])
		];
	}
	var _proto = mbtnHero.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.source = "mbtn_BgFc_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.source = "mbtnHero_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.horizontalCenter = 0;
		t.source = "mbtn_Bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.horizontalCenter = 0;
		t.source = "mbtnHero_png";
		t.verticalCenter = 0;
		return t;
	};
	return mbtnHero;
})(eui.Skin);generateEUI.paths['resource/skins/skins_item/mbtnGoods.exml'] = window.mbtnGoods = (function (_super) {
	__extends(mbtnGoods, _super);
	function mbtnGoods() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.height = 80;
		this.width = 111;
		this.elementsContent = [];
		this._Image1_i();
		
		this._Image2_i();
		
		this._Image3_i();
		
		this._Image4_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("_Image3","",1,""),
					new eui.AddItems("_Image4","",1,"")
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image1","",0,""),
					new eui.AddItems("_Image2","",1,"")
				])
		];
	}
	var _proto = mbtnGoods.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.source = "mbtn_BgFc_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.source = "mbtnGoods_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.horizontalCenter = 0;
		t.source = "mbtn_Bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.horizontalCenter = 0;
		t.source = "mbtnGoods_png";
		t.verticalCenter = 0;
		return t;
	};
	return mbtnGoods;
})(eui.Skin);generateEUI.paths['resource/skins/skins_item/mbtnAbout.exml'] = window.mbtnAbout = (function (_super) {
	__extends(mbtnAbout, _super);
	function mbtnAbout() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "up";
		this.height = 80;
		this.width = 111;
		this.elementsContent = [];
		this._Image1_i();
		
		this._Image2_i();
		
		this._Image3_i();
		
		this._Image4_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("_Image3","",1,""),
					new eui.AddItems("_Image4","",1,"")
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image1","",0,""),
					new eui.AddItems("_Image2","",1,"")
				])
		];
	}
	var _proto = mbtnAbout.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.source = "mbtn_BgFc_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.source = "mbtnAbout_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.horizontalCenter = 0;
		t.source = "mbtn_Bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.horizontalCenter = 0;
		t.source = "mbtnAbout_png";
		t.verticalCenter = 0;
		return t;
	};
	return mbtnAbout;
})(eui.Skin);generateEUI.paths['resource/skins/MainScene.exml'] = window.MainSceneSkin = (function (_super) {
	__extends(MainSceneSkin, _super);
	function MainSceneSkin() {
		_super.call(this);
		this.skinParts = ["mgtnPlayer","mbtnHero","mbtnGoods","mbtnAbout","Group_mbtn"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Image1_i(),this.Group_mbtn_i()];
	}
	var _proto = MainSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "homeBg_jpg";
		t.top = 0;
		return t;
	};
	_proto.Group_mbtn_i = function () {
		var t = new eui.Group();
		this.Group_mbtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 83.33;
		t.width = 455.02;
		t.x = 13.24;
		t.y = 714.71;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.mgtnPlayer_i(),this.mbtnHero_i(),this.mbtnGoods_i(),this.mbtnAbout_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 4;
		t.horizontalAlign = "center";
		t.verticalAlign = "contentJustify";
		return t;
	};
	_proto.mgtnPlayer_i = function () {
		var t = new eui.ToggleButton();
		this.mgtnPlayer = t;
		t.label = "";
		t.skinName = "mbtnPlayer";
		t.x = 115;
		t.y = 24;
		return t;
	};
	_proto.mbtnHero_i = function () {
		var t = new eui.ToggleButton();
		this.mbtnHero = t;
		t.label = "";
		t.skinName = "mbtnHero";
		t.x = 311;
		t.y = 20;
		return t;
	};
	_proto.mbtnGoods_i = function () {
		var t = new eui.ToggleButton();
		this.mbtnGoods = t;
		t.label = "";
		t.skinName = "mbtnGoods";
		t.x = 369;
		t.y = 9;
		return t;
	};
	_proto.mbtnAbout_i = function () {
		var t = new eui.ToggleButton();
		this.mbtnAbout = t;
		t.label = "";
		t.skinName = "mbtnAbout";
		t.x = 433;
		t.y = 16;
		return t;
	};
	return MainSceneSkin;
})(eui.Skin);generateEUI.paths['resource/skins/PlayerScene.exml'] = window.PlayerSceneSkin = (function (_super) {
	__extends(PlayerSceneSkin, _super);
	var PlayerSceneSkin$Skin9 = 	(function (_super) {
		__extends(PlayerSceneSkin$Skin9, _super);
		function PlayerSceneSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",100),
						new eui.SetProperty("_Image1","percentHeight",100),
						new eui.SetProperty("_Image1","source","btnReturn_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PlayerSceneSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 90;
			t.horizontalCenter = 0;
			t.source = "btnReturn_png";
			t.verticalCenter = 0;
			t.percentWidth = 90;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PlayerSceneSkin$Skin9;
	})(eui.Skin);

	var PlayerSceneSkin$Skin10 = 	(function (_super) {
		__extends(PlayerSceneSkin$Skin10, _super);
		function PlayerSceneSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",100),
						new eui.SetProperty("_Image1","percentHeight",100),
						new eui.SetProperty("_Image1","source","btnEquip_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PlayerSceneSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 90;
			t.horizontalCenter = 0;
			t.source = "btnEquip_png";
			t.verticalCenter = 0;
			t.percentWidth = 90;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PlayerSceneSkin$Skin10;
	})(eui.Skin);

	var PlayerSceneSkin$Skin11 = 	(function (_super) {
		__extends(PlayerSceneSkin$Skin11, _super);
		function PlayerSceneSkin$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","percentWidth",100),
						new eui.SetProperty("_Image1","percentHeight",100),
						new eui.SetProperty("_Image1","source","btnStrengthen_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PlayerSceneSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 90;
			t.horizontalCenter = 0;
			t.source = "btnStrengthen_png";
			t.verticalCenter = 0;
			t.percentWidth = 90;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return PlayerSceneSkin$Skin11;
	})(eui.Skin);

	function PlayerSceneSkin() {
		_super.call(this);
		this.skinParts = ["btn_return","btn_zhuangbei","btn_qianghua","list_zhuangbei","scr_zhuangbei"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.btn_return_i(),this.btn_zhuangbei_i(),this.btn_qianghua_i(),this.scr_zhuangbei_i()];
	}
	var _proto = PlayerSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "commonBg_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "profileTitle_png";
		t.y = 133.16;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "profileContent_png";
		t.y = 189.88;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0.5;
		t.source = "skillBg_png";
		t.y = 480.06;
		return t;
	};
	_proto.btn_return_i = function () {
		var t = new eui.Button();
		this.btn_return = t;
		t.label = "";
		t.x = 15.86;
		t.y = 133.72;
		t.skinName = PlayerSceneSkin$Skin9;
		return t;
	};
	_proto.btn_zhuangbei_i = function () {
		var t = new eui.Button();
		this.btn_zhuangbei = t;
		t.horizontalCenter = -110;
		t.label = "";
		t.y = 626.46;
		t.skinName = PlayerSceneSkin$Skin10;
		return t;
	};
	_proto.btn_qianghua_i = function () {
		var t = new eui.Button();
		this.btn_qianghua = t;
		t.horizontalCenter = 110;
		t.label = "";
		t.y = 626.46;
		t.skinName = PlayerSceneSkin$Skin11;
		return t;
	};
	_proto.scr_zhuangbei_i = function () {
		var t = new eui.Scroller();
		this.scr_zhuangbei = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 120.21;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.width = 411.06;
		t.x = 33;
		t.y = 484.91;
		t.viewport = this.list_zhuangbei_i();
		return t;
	};
	_proto.list_zhuangbei_i = function () {
		var t = new eui.List();
		this.list_zhuangbei = t;
		t.itemRendererSkinName = zhuangbeiItem;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	return PlayerSceneSkin;
})(eui.Skin);generateEUI.paths['resource/skins/skins_item/goodsListItem.exml'] = window.goodsListItem = (function (_super) {
	__extends(goodsListItem, _super);
	function goodsListItem() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 104;
		this.width = 443;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Label2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.image"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.value"],[0],this._Label2,"text");
	}
	var _proto = goodsListItem.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "listItemBkgd_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67;
		t.width = 60;
		t.x = 34;
		t.y = 18;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xffdb51;
		t.width = 130;
		t.x = 148.5;
		t.y = 23;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21;
		t.size = 20;
		t.textColor = 0x00cce5;
		t.width = 231;
		t.x = 123;
		t.y = 63;
		return t;
	};
	return goodsListItem;
})(eui.Skin);generateEUI.paths['resource/skins/skins_item/heroListItem.exml'] = window.heroListItem = (function (_super) {
	__extends(heroListItem, _super);
	var heroListItem$Skin12 = 	(function (_super) {
		__extends(heroListItem$Skin12, _super);
		function heroListItem$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","checked_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = heroListItem$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "checkNo_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return heroListItem$Skin12;
	})(eui.Skin);

	function heroListItem() {
		_super.call(this);
		this.skinParts = ["ce_select"];
		
		this.height = 104;
		this.width = 443;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Label2_i(),this.ce_select_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.image"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.value"],[0],this._Label2,"text");
	}
	var _proto = heroListItem.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "listItemBkgd_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67;
		t.width = 60;
		t.x = 34;
		t.y = 18;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21.5;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xffdb51;
		t.verticalAlign = "middle";
		t.width = 122;
		t.x = 152;
		t.y = 22.5;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21.5;
		t.size = 20;
		t.textAlign = "left";
		t.textColor = 0x00c4ed;
		t.verticalAlign = "middle";
		t.width = 234.5;
		t.x = 121;
		t.y = 62.5;
		return t;
	};
	_proto.ce_select_i = function () {
		var t = new eui.CheckBox();
		this.ce_select = t;
		t.label = "";
		t.x = 390;
		t.y = 14.5;
		t.skinName = heroListItem$Skin12;
		return t;
	};
	return heroListItem;
})(eui.Skin);generateEUI.paths['resource/skins/skins_item/zhuangbeiItem.exml'] = window.zhuangbeiItem = (function (_super) {
	__extends(zhuangbeiItem, _super);
	function zhuangbeiItem() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 130;
		this.width = 87;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this._Image2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.image"],[0],this._Image2,"source");
	}
	var _proto = zhuangbeiItem.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "skillItemFrame_png";
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 35;
		t.left = 0;
		t.right = 0;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xf98d54;
		t.verticalAlign = "middle";
		t.y = 88;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 64.33;
		t.width = 64.33;
		t.x = 11.33;
		t.y = 9.33;
		return t;
	};
	return zhuangbeiItem;
})(eui.Skin);