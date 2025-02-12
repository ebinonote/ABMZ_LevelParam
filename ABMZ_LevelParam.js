// =============================================================================
// ABMZ_LevelParam.js
// Version: 0.01
// -----------------------------------------------------------------------------
// [Homepage]: ヱビのノート
//             http://www.zf.em-net.ne.jp/~ebi-games/
// =============================================================================



/*:ja
 * @target MZ
 * @plugindesc v0.01 レベルに応じてアクター、敵キャラの能力値を設定するプラグイン
 * @author ヱビ
 * @url http://www.zf.em-net.ne.jp/~ebi-games/
 * 
 * @param AllyMHPBase
 * @text アクター最大HP通常能力値
 * @type text
 * @desc 最大HPの通常能力値。通常能力値にアクターの倍率をかける
 * @default (level+14+Math.pow(level/10,2))*7.5
 * 
 * 
 * @param AllyMMPBase
 * @text アクター最大MP通常能力値
 * @type text
 * @desc 最大MPの通常能力値。通常能力値にアクターの倍率をかける
 * @default 65+level*5
 * 
 * @param AllyATKBase
 * @text アクター攻撃力通常能力値
 * @type text
 * @desc 攻撃力の通常能力値。通常能力値にアクターの倍率をかける
 * @default level+14+Math.pow(level/10,2)
 * 
 * 
 * @param AllyDEFBase
 * @text アクター防御力通常能力値
 * @type text
 * @desc 防御力の通常能力値。通常能力値にアクターの倍率をかける
 * @default level+14+Math.pow(level/10,2)
 * 
 * 
 * @param AllyMATBase
 * @text アクター魔法力通常能力値
 * @type text
 * @desc 魔法力の通常能力値。通常能力値にアクターの倍率をかける
 * @default level+14+Math.pow(level/10,2)
 * 
 * 
 * @param AllyMDFBase
 * @text アクター魔法防御力通常能力値
 * @type text
 * @desc 防御力の通常能力値。通常能力値にアクターの倍率をかける
 * @default level+14+Math.pow(level/10,2)
 * 
 * 
 * @param AllyAGIBase
 * @text アクター敏捷性通常能力値
 * @type text
 * @desc 敏捷性の通常能力値。通常能力値にアクターの倍率をかける
 * @default level+14+Math.pow(level/10,2)
 * 
 * 
 * @param AllyLUKBase
 * @text アクター運通常能力値
 * @type text
 * @desc 運の通常能力値。通常能力値にアクターのの倍率をかける
 * @default level+14+Math.pow(level/10,2)
 * 
 * 
 * @param EnemyMHPBase
 * @text 敵キャラ最大HP通常能力値
 * @type text
 * @desc 最大HPの通常能力値。通常能力値に敵キャラのステータス（約7~10）をかける
 * @default (level+14+Math.pow(level/10,2))/2
 * 
 * 
 * 
 * @param EnemyMMPBase
 * @text 敵キャラMMP通常能力値
 * @type text
 * @desc 最大MP通常能力値。通常能力値に敵キャラのステータス（約7~10）をかける
 * @default (level+14+Math.pow(level/10,2))/10
 * 
 * 
 * 
 * @param EnemyATKBase
 * @text 敵キャラ攻撃力通常能力値
 * @type text
 * @desc 攻撃力通常能力値。通常能力値に敵キャラのステータス（約7~10）をかける
 * @default (level+14+Math.pow(level/10,2))/10
 * 
 * 
 * 
 * @param EnemyDEFBase
 * @text 敵キャラ防御力通常能力値
 * @type text
 * @desc 防御力通常能力値。通常能力値に敵キャラのステータス（約7~10）をかける
 * @default (level+14+Math.pow(level/10,2))/10
 * 
 * 
 * 
 * @param EnemyMATBase
 * @text 敵キャラ魔法力通常能力値
 * @type text
 * @desc 魔法力通常能力値。通常能力値に敵キャラのステータス（約7~10）をかける
 * @default (level+14+Math.pow(level/10,2))/10
 * 
 * 
 * 
 * @param EnemyMDFBase
 * @text 敵キャラ魔法防御通常能力値
 * @type text
 * @desc 魔法防御通常能力値。通常能力値に敵キャラのステータス（約7~10）をかける
 * @default (level+14+Math.pow(level/10,2))/10
 * 
 * @param EnemyAGIBase
 * @text 敵キャラ敏捷性通常能力値
 * @type text
 * @desc 敏捷性通常能力値。通常能力値に敵キャラのステータス（約7~10）をかける
 * @default (level+14+Math.pow(level/10,2))/10
 * 
 * @param EnemyLUKBase
 * @text 敵キャラ運通常能力値
 * @type text
 * @desc 運通常能力値。通常能力値に敵キャラのステータス（約7~10）をかける
 * @default (level+14+Math.pow(level/10,2))/10
 * 
 * 
 * @help
 * ============================================================================
 * 概要
 * ============================================================================
 * 
 * HP,攻撃などのパラメータを設定しやすくするプラグインです。
 * 
 * 職業のメモ：
 * <palamCalc:7.5, 1.0, 1.0, 1.0, 1.05, 1.0, 1.0, 0.9>
 * プラグインパラメータ「AllyMHPBase」などに乗算されます。
 * 
 * 敵キャラのステータスがプラグインパラメータ「EnemyATKBase」が乗算されます。
 * 10=1倍です。
 * 例：スライム
 * HPは通常攻撃の威力にし、何発で倒せるかをステータスに設定するのが
 * おすすめです。
 * 
 * 敵キャラの場合、「bookLevel:x」にレベルの計算式を入れてください。
 * 
 * 
 */

(function() {
	"use strict";
	var parameters = PluginManager.parameters('ABMZ_LevelParam');
	var AllyParam = [];
	var EnemyParam = [];
	AllyParam[0] = parameters['AllyMHPBase'];//テキスト
	AllyParam[1] = parameters['AllyMMPBase'];
	AllyParam[2] = parameters['AllyATKBase'];
	AllyParam[3] = parameters['AllyDEFBase'];
	AllyParam[4] = parameters['AllyMATBase'];
	AllyParam[5] = parameters['AllyMDFBase'];
	AllyParam[6] = parameters['AllyAGIBase'];
	AllyParam[7] = parameters['AllyLUKBase'];
	EnemyParam[0] = parameters['EnemyMHPBase'];//テキスト
	EnemyParam[1] = parameters['EnemyMMPBase'];
	EnemyParam[2] = parameters['EnemyATKBase'];
	EnemyParam[3] = parameters['EnemyDEFBase'];
	EnemyParam[4] = parameters['EnemyMATBase'];
	EnemyParam[5] = parameters['EnemyMDFBase'];
	EnemyParam[6] = parameters['EnemyAGIBase'];
	EnemyParam[7] = parameters['EnemyLUKBase'];


//============================================================================
// 概要
//============================================================================

/* // 元のコード
Game_Actor.prototype.param = function(paramId) {
    const value =
        this.paramBasePlus(paramId) *
        this.paramRate(paramId) *
        this.paramBuffRate(paramId);
    const maxValue = this.paramMax(paramId);
    const minValue = this.paramMin(paramId);
    return Math.round(value.clamp(minValue, maxValue));
};

Game_Actor.prototype.paramBase = function(paramId) {
    return this.currentClass().params[paramId][this._level];
};

*/
// 上書き

var _Game_Actor_prototype_paramBase =Game_Actor.prototype.paramBase;
Game_Actor.prototype.paramBase = function(paramId) {
	if (!this.currentClass()) {
		return _Game_Actor_prototype_paramBase.call(this, paramId);
	}
	if (!this.currentClass().meta.paramCalc) {
		return _Game_Actor_prototype_paramBase.call(this, paramId);
	}
	let level = this.level;
	let baseValue = Number(eval(AllyParam[paramId]));
	if (this.currentClass().meta.paramCalc){
		let paramPoint = this.currentClass().meta.paramCalc.split(",")[paramId];
		baseValue = Math.ceil(baseValue * paramPoint);
	}
    return baseValue;
};

Game_Enemy.prototype.paramBase = function(paramId) {
	let level = eval(this.enemy().meta.bookLevel);
	let baseValue = Number(eval(EnemyParam[paramId]));
    return Math.ceil(baseValue * this.enemy().params[paramId]);
};

})();