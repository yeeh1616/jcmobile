<%@ page language="java" import="java.util.*"  pageEncoding="UTF-8" isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib uri="http://www.suny.com.cn/customer.tld" prefix="customertags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<jsp:include page="../mobile/include/htmlheader.jsp"></jsp:include>
</head>

<body>
<div data-role="page" id="mergerPageId">
<div data-role="header" data-position="fixed" data-tap-toggle="false" id="top">
				<div class="head-left">
					<a href="/merger/index.jhtml" data-ajax="false" 
						class="qx-icon" data-transition="slide" data-direction="reverse">合买大厅</a>
				</div>
				<h1>
					合买方案详情
				</h1>
</div>
<div data-role="content">
				<div class="con_t">
						<div class="con_t_l">
								<h3><span>${fn:substring(lo.username,0,2) }**</span>的${lo.licenseName}</h3>
								<p>方案编号：${mo.id }</p>
						</div>
						<div class="con_t_r">
								<p>发起时间：${lo.orderDate }</p>
								<p class="rengou">认购截至时间：${mo.reserved2 }</p>
						</div>
						<div class="clear"></div>
				</div>
				<div class="con_1">
						<div class="con_1_r">
								<p><span class="blue">发起人：${fn:substring(lo.username,0,2) }**
								</span><br>
								<span class="blue">认购份数：${mo.launchNum}</span></br>
								<span class="blue">方案描述：${mo.partDetail }</span></p>
						</div>
						<div class="clear"></div>
				</div>
				<div class="con_3">
						<div class="con_3_r">
								<div class="xinxi">
										<table width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#fff" class="biaoge">
												<tbody>
												<tr>
													<td width="60" height="31" class="biaoge1">方案金额</td>
													<!-- <td width="53" class="biaoge1">投注方式</td> -->
													<td width="28" class="biaoge1">注数</td>
													<td width="42" class="biaoge1">倍数</td>
													<td width="42" class="biaoge1">保底</td>
													<td width="55" class="biaoge1">提成比例</td>
													<td width="60" class="biaoge1">发起人认购 </td>
													<td width="60" class="biaoge1">已认购人数</td>
													<td width="60" class="biaoge1">方案状态</td>
													<td width="60" class="biaoge1">出票状态</td>
													<!-- <td width="72" class="biaoge1">中奖情况</td> -->
													<td width="75" class="biaoge1">保密类型</td>
												</tr>
												<tr>
														<td height="31">${mo.betPrice} </td>
														<!-- <td>复式 ？</td> -->
														<td>${lo.betNum }</td>
														<td>${lo.multiple} </td>
														<td>${mo.insNum}</td>
														<!-- <td>${mo.brokerage * 100}%</td> -->
														<c:choose>
															<c:when test='${mo.brokerage <= 0}'>
														         <td>无提成</td>
														    </c:when>
														    <c:otherwise>
														    	<td>${mo.brokerage * 100}%</td><!-- 提成 -->
														    </c:otherwise>
														</c:choose>
														<td>${mo.launchNum}</td>
														<td><span class="red">${pagination.totalCount}</span>人</td>
														<td><span class="red">
														<c:choose>
			      											<c:when test="${mo.state == '1'}">未满员</c:when>
			      											<c:when test="${mo.state == '2'}">已满员</c:when>
			      											<c:when test="${mo.state == '3'}">已撤单</c:when>
			      										</c:choose>(${mo.showProgress})</span></td>
														<td>${lo.stateName}</td>
														<!-- <td>中奖情况?</td> -->
														<td>${mo.showLevelName}</td>
												</tr>
										</tbody></table>
								</div>
						</div>
						<div class="clear"></div>
				</div>
				<div class="con_5">
					<div class="con_5_r">
								<div class="con_5_r_t">投注详情</div>
								<div class="con_5_r_f2">
								<input type="hidden" value="${IsShowContent}" name="IsShowContent"/>
									<c:if test="${IsShowContent == 'show' && lo.betType == 3 && lo.singleFlag == 0 && (mo.licenseId != 9 && mo.licenseId != 10)}">
										<table width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#fff" class="zc_bge">
										<tbody>
										<c:choose>
											<c:when test="${lo.licenseId == '7'}">
												<tr>
													<td class="zc_bge1" rowspan="2">对阵</td>
													<c:forEach var="zcListItem" items="${zcList}" varStatus="varStatus">
													<td>(半)<br/>${zcListItem.hostTeam}</td>
													<td>(全)<br/>${zcListItem.hostTeam}</td>
													</c:forEach>
												</tr>
												<tr class="zc_bge3">
													<c:forEach var="zcListItem" items="${zcList}" varStatus="varStatus">
													<td>${zcListItem.guestTeam}<br/>(半)</td>
													<td>${zcListItem.guestTeam}<br/>(全)</td>
													</c:forEach>
												</tr>
											</c:when>
											<c:when test="${lo.licenseId == '8'}">
												<tr>
													<td class="zc_bge1" rowspan="1">对阵</td>
													<c:forEach var="zcListItem" items="${zcList}" varStatus="varStatus">
													<td>(主)<br/>${zcListItem.hostTeam}</td>
													<td>(客)<br/>${zcListItem.guestTeam}</td>
													</c:forEach>
												</tr>
											</c:when>
											<c:otherwise>
												<tr>
													<td class="zc_bge1" rowspan="2">对阵</td>
													<c:forEach var="zcListItem" items="${zcList}" varStatus="varStatus">
													<td><br/>${zcListItem.hostTeam}</td>
													</c:forEach>
												</tr>
											<tr class="zc_bge3">
												<c:forEach var="zcListItem" items="${zcList}" varStatus="varStatus">
												<td>${zcListItem.guestTeam}<br/></td>
												</c:forEach>
											</tr>
											</c:otherwise>
										</c:choose>
										<c:choose>
											<c:when test="${mo.uploadType == 1}">
												<tr>
													<td></td>
													<td colspan="14" style="padding:5px;">
														<c:choose>
															<c:when test="${sessionScope.member.id == mo.userid}">
																 <div>
														            <font color=red>请及时上传方案</font><span id="fileuplodid" style="display: none;" width="101" height="31"></span>
														            <span id="fileQueue" ></span>
														         </div> 
															</c:when>
															<c:otherwise>
																方案未上传
															</c:otherwise>
														</c:choose>
													</td>
												</tr>
											</c:when>
											<c:otherwise>
												<c:forEach var="betCodeList" items="${betCodeLists}" varStatus="varStatus">
													<tr>
														<td>投注项</td>
														<c:forEach var="item" items="${betCodeList}" varStatus="varStatus">
														<td class="zc_bge2">${item}</td>
														</c:forEach>
													</tr>
												</c:forEach>
											</c:otherwise>
										</c:choose>
										
										</tbody></table>
									</c:if>
									<c:if test="${IsShowContent == 'show' && lo.betType == 3 && lo.singleFlag != 0 && lo.betCode !='' }">
										请到网站下载文件
									</c:if>
									
									<c:if test="${mo.uploadType == 1}">
										<table width="845" cellspacing="0" cellpadding="0" border="0" bgcolor="#fff" class="zc_bge">
										<tbody>
										<c:choose>
											<c:when test="${lo.licenseId == '7'}">
												<tr>
													<td class="zc_bge1" rowspan="2">对阵</td>
													<c:forEach var="zcListItem" items="${zcList}" varStatus="varStatus">
													<td>(半)<br/>${zcListItem.hostTeam}</td>
													<td>(全)<br/>${zcListItem.hostTeam}</td>
													</c:forEach>
												</tr>
												<tr class="zc_bge3">
													<c:forEach var="zcListItem" items="${zcList}" varStatus="varStatus">
													<td>${zcListItem.guestTeam}<br/>(半)</td>
													<td>${zcListItem.guestTeam}<br/>(全)</td>
													</c:forEach>
												</tr>
											</c:when>
											<c:when test="${lo.licenseId == '8'}">
												<tr>
													<td class="zc_bge1" rowspan="1">对阵</td>
													<c:forEach var="zcListItem" items="${zcList}" varStatus="varStatus">
													<td>(主)<br/>${zcListItem.hostTeam}</td>
													<td>(客)<br/>${zcListItem.guestTeam}</td>
													</c:forEach>
												</tr>
											</c:when>
											<c:otherwise>
												<tr>
													<td class="zc_bge1" rowspan="2">对阵</td>
													<c:forEach var="zcListItem" items="${zcList}" varStatus="varStatus">
													<td><br/>${zcListItem.hostTeam}</td>
													</c:forEach>
												</tr>
											<tr class="zc_bge3">
												<c:forEach var="zcListItem" items="${zcList}" varStatus="varStatus">
												<td>${zcListItem.guestTeam}<br/></td>
												</c:forEach>
											</tr>
											</c:otherwise>
										</c:choose>
												<tr>
													<td></td>
													<td colspan="14">
														<c:choose>
															<c:when test="${sessionScope.member.id == mo.userid}">
														       <font color=red>请到网站及时上传方案</font>
															</c:when>
															<c:otherwise>
																方案未上传
															</c:otherwise>
														</c:choose>
													</td>
												</tr>
										</tbody></table>
									</c:if>
								</div>
						</div>
						<div style="clear:both;"></div>
				</div>
				
				<!-- 中奖情况beging -->
				<c:if test="${lo.betState == '10' || lo.betState == '12' || lo.betState == '13'}">
				<div class="zhong_q" style="height:87px;">
			    	<div class="zhong_ql" style="height:87px;">中奖情况</div>
			        <div class="zhong_qr">
			        <p>方案中奖金额：<span class="q_red">￥${hrb.bonusAftTax }</span>(税后)<br/>
			        	发起人提成：<span class="q_red">￥${hrb.brok }</span>,
			        	每元派送<span class="q_red">￥${hrb.perBonus }</span></p>
			        </div>
			    </div>
			    </c:if>
    			<!-- 中奖情况end -->
				<div class="con_6">
						<div class="con_6_r">
								<div class="con_6_r_t">
										参与总人数${pagination.totalCount}人
								</div>
								<div class="con_6_r_f">
										<table width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#fff" class="bge_n">
												<tbody><tr>
														<td width="63" height="32" class="bge11">序号</td>
														<td width="154" class="bge11">用户名</td>
														<td width="106" class="bge11">认购金额 </td>
														<td width="96" class="bge11">认购比例 </td>
														<td width="117" class="bge11">派奖金额 </td>
														<td width="218" class="bge11">认购时间 </td>
												</tr>
												<c:forEach var="list" items="${pagination.list}" varStatus="varStatus">
												<c:choose>
													<c:when test="${varStatus.count%2==0}">
														<tr bgcolor="#f4fbff">
													</c:when>
													<c:otherwise>
														<tr bgcolor="#FFFFFF">
													</c:otherwise>
												</c:choose>
													<td height="30" class=" biaoge4">${varStatus.count}</td><!-- 序号 -->
													<td >${fn:substring(list.joinUsername,0,2)}**</td><!-- 用户名 -->
													<td >${list.joinPrice}</td><!-- 认购金额 -->
													<td><fmt:formatNumber type="number" value="${(list.joinNum/mo.totalNum)*100}" maxFractionDigits="0"/>%</td><!-- 认购比例 -->
													<td><fmt:formatNumber value="${list.bonus}" pattern="#,###.##" minFractionDigits="2"></fmt:formatNumber></td><!-- 派奖金额 -->
													<td>${list.joinDate}</td><!-- 认购时间 -->
												</tr>
												</c:forEach>
												
										</tbody></table>
								</div>
								<div class="con_6_r_ff">
								<p>已认购 <span>${mo.buyNum}</span> 份，共<span>${mo.singlePrice * mo.buyNum}</span>元
								</p></div>
						</div>
						<div style="clear:both;"></div>
				</div>
		</div>
</div>
</body>
</html>
