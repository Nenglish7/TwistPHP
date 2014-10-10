<?php
/**
 * This file is part of TwistPHP.
 *
 * TwistPHP is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * TwistPHP is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with TwistPHP.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @author     Shadow Technologies Ltd. <contact@shadow-technologies.co.uk>
 * @license    https://www.gnu.org/licenses/gpl.html LGPL License
 * @link       http://twistphp.com/
 *
 */

namespace TwistController;

class BaseController{

	protected $arrAliasURIs = array();
	protected $arrReplaceURIs = array();

	public function _extended(){
		return true;
	}

	public function _default(){
		\TwistPHP\Error::errorPage(404);
		return false;
	}

	public function _fallback(){
		\TwistPHP\Error::errorPage(404);
		return false;
	}

	protected function _aliasURI($strURI,$strFunctionName){
		$this->arrAliasURIs[$strURI] = $strFunctionName;
	}

	public function _getAliases(){
		return $this->arrAliasURIs;
	}

	protected function _replaceURI($strURI,$strFunctionName){
		$this->arrReplaceURIs[$strFunctionName] = $strURI;
	}

	public function _getReplacements(){
		return $this->arrReplaceURIs;
	}

	protected function _callFunction($strCallFunctionName){

		$arrControllerFunctions = array();
		foreach(get_class_methods($this) as $strFunctionName){
			$arrControllerFunctions[strtolower($strFunctionName)] = $strFunctionName;
		}

		$strRequestMethodFunction = sprintf('%s%s',strtolower($_SERVER['REQUEST_METHOD']),strtolower($strCallFunctionName));

		if(array_key_exists($strRequestMethodFunction,$arrControllerFunctions)){
			return $this->$arrControllerFunctions[$strRequestMethodFunction]();
		}elseif(array_key_exists(strtolower($strCallFunctionName),$arrControllerFunctions)){
			return $this->$arrControllerFunctions[$strCallFunctionName]();
		}else{
			\TwistPHP\Error::errorPage(404);
			return false;
		}
	}

	public function routeDetails($arrRoute){
		\TwistPHP\Error::errorPage(404);
		return false;
	}
}