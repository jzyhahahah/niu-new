import dayjs from "dayjs";
import "./NiuNew.css";
import { useTitle } from "ahooks";
import { PullToRefresh } from "antd-mobile";
import { useState } from "react";
import { Popup } from "antd-mobile";
import { CloseOutline } from "antd-mobile-icons";
function NiuNew({ id, time, phone }) {
	const [hour, minute] = time.split(":");
	const hasWaitTime = time
		? dayjs().diff(dayjs().set("hour", hour).set("minute", minute), "minute")
		: 0;
	const [visible, setVisible] = useState(false);
	useTitle("牛New寿喜烧(滨江宝龙城店)");

	const handleSetVisible = () => {
		setVisible(true);
	};

	window.handleSetVisible = handleSetVisible;

	const niuNewHtml = `
  <div style="flex: 1 1 0%; height: 100%; width: 100%; box-sizing: border-box; display: flex; flex-direction: column; align-content: flex-start; border: 0vw; margin: 0vw; padding: 0vw; min-width: 0vw; position: relative;">
			<div
				class="rax-view-v2"
				style="height: 100%; display: flex; flex-direction: column; background-color: rgb(247, 247, 247);"
			>
				<div
					refreshtype="system"
					class="rax-view-v2 rax-scrollview rax-scrollview-vertical max-scrollview"
					style="padding-top: 6px; height: 100%; padding-left: 8px; padding-right: 8px; background-color: transparent; overflow: hidden scroll;"
				>
					<div class="rax-view-v2" style="overflow: hidden; min-height: 100%;">
						<div class="rax-view-v2" style="position: relative;">
							<div
								class="rax-view-v2 max-internal-pullrefresh-wrapper imgView"
								style="display: flex; align-items: center; justify-content: center; position: relative; height: 0px; overflow: hidden;"
							>
								<img
									class="max-internal-web-refresh"
									src="data:image/png;base64,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"
								/>
							</div>
							<div class="rax-view-v2">
								<div class="rax-view-v2" style="display: block;">
									<div class="rax-view-v2">
										<div
											class="rax-view-v2"
											style="background-color: rgb(255, 255, 255); border-radius: 12px; padding: 2.6667vw 12px 12px; display: flex; flex-direction: column; margin-bottom: 8px;"
										>
											<div
												class="rax-view-v2"
												style="display: flex; flex-direction: column; align-items: center;"
											>
												<div
													class="rax-view-v2"
													style="display: flex; flex-direction: row; align-items: center; justify-content: center; margin-bottom: 4px;"
												>
													<div
														class="__rax-text __rax-text--other-default  __rax-text--overflow-hidden __rax-text--singleline __rax-text--ellipsis"
														style="display: inline; white-space: pre-wrap; flex-shrink: unset; font-family: PingFangSC-Semibold; font-weight: 600; font-size: 24px; color: rgb(255, 75, 16); line-height: 34px; letter-spacing: 0vw; max-height: 34px;"
													>
														小桌 ${id}
													</div>
												</div>
												<div
													class="rax-view-v2"
													style="flex-direction: row; align-items: center; justify-content: flex-start;"
												>
													<div
														class="rax-view-v2"
														style="display: flex; flex-direction: column; align-items: center; flex-grow: 0; flex-shrink: 1;"
													>
														<div
															class="rax-view-v2"
															style="display: flex; flex-direction: row; align-items: center;"
														>
															<div
																class="rax-view-v2"
																style="display: flex; flex-direction: row; align-items: center; justify-content: center;"
															>
																<div
																	class="rax-view-v2"
																	style="display: flex; flex-direction: row; align-items: center; justify-content: center;"
																>
																	<div
																		class="__rax-text __rax-text--other-default  __rax-text--overflow-hidden __rax-text--singleline __rax-text--ellipsis"
																		style="display: inline; white-space: pre-wrap; flex-shrink: unset; font-family: PingFangSC-Semibold; font-weight: 600; font-size: 14px; color: rgb(17, 17, 17); line-height: 20px; letter-spacing: 0vw; max-height: 20px;"
																	>
																		还需等待
																	</div>
																	<div
																		class="__rax-text __rax-text--other-default  __rax-text--overflow-hidden __rax-text--singleline __rax-text--ellipsis"
																		style="display: inline; white-space: pre-wrap; flex-shrink: unset; font-family: PingFangSC-Semibold; font-weight: 600; font-size: 14px; color: rgb(255, 75, 16); line-height: 20px; letter-spacing: 0vw; max-height: 20px; margin-left: 3px; margin-right: 3px;"
																	>
																		0
																	</div>
																	<div
																		class="__rax-text __rax-text--other-default  __rax-text--overflow-hidden __rax-text--singleline __rax-text--ellipsis"
																		style="display: inline; white-space: pre-wrap; flex-shrink: unset; font-family: PingFangSC-Semibold; font-weight: 600; font-size: 14px; color: rgb(17, 17, 17); line-height: 20px; letter-spacing: 0vw; max-height: 20px;"
																	>
																		桌
																	</div>
																</div>
															</div>
															<div
																class="rax-view-v2"
																style="height: 12px; width: 12px; justify-content: center; margin-left: 3px; align-items: center;"
															>
																<div
																	forwardedref="[object Object]"
																	class="rax-view-v2"
																	style="transform: rotate(0deg);"
																>
																	<img
																		src="/23f8797758876f76221a9e110e061dbd645.png"
																		style="width: 12px; height: 12px; line-height: 12px;"
																	/>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div
												class="rax-view-v2"
												style="border-radius: 6px; margin-bottom: 11px; margin-top: 4px;"
											>
												<div
													class="rax-view-v2"
													style="display: flex; flex-direction: column; padding-top: 0px; margin-left: 0px; margin-right: 0px; padding-bottom: 0px;"
												>
													<div class="rax-view-v2">
														<div
															forwardedref="[object Object]"
															class="rax-view-v2"
															style="width: 100%; overflow: hidden; display: flex; flex-direction: column; height: 0px;"
														>
															<div
																class="rax-view-v2"
																style="position: absolute; top: 0vw; left: 0vw; display: flex; flex-direction: column;"
															>
																<div
																	class="rax-view-v2"
																	style="padding-top: 15.5px; padding-bottom: 0px; width: 100%;"
																>
																	<div
																		class="rax-view-v2"
																		style="flex-direction: column; width: 1872px;"
																	>
																		<div
																			class="rax-view-v2"
																			style="width: 1872px;"
																		>
																			<div
																				class="rax-view-v2"
																				style="height: 8px; background-color: rgb(234, 234, 234); border-radius: 4px;"
																			></div>
																			<div
																				forwardedref="[object Object]"
																				class="rax-view-v2"
																				style="height: 8px; border-radius: 8px; position: absolute; left: 0px; right: 0px; top: 0px; overflow: hidden; width: 468px;"
																			>
																				<div style="position: absolute; top: 0px; height: 8px; border-radius: 8px; width: 1872px; background-image: linear-gradient(90.2449deg, rgb(255, 119, 0), rgb(255, 75, 16));"></div>
																				<div
																					class="rax-view-v2"
																					style="flex-direction: row; right: 0px; top: 2.5px; position: absolute;"
																				>
																					<div
																						class="rax-view-v2"
																						style="width: 3px; height: 3px; border-radius: 3px; overflow: hidden; margin-right: 2.5px; background-color: rgb(255, 255, 255); opacity: 0.3;"
																					></div>
																					<div
																						class="rax-view-v2"
																						style="width: 3px; height: 3px; border-radius: 3px; overflow: hidden; margin-right: 2.5px; background-color: rgb(255, 255, 255); opacity: 0.6;"
																					></div>
																				</div>
																			</div>
																			<div
																				class="rax-view-v2"
																				style="flex-direction: row; position: absolute; left: 0px; top: 0px; justify-content: space-between; width: 1872px;"
																			>
																				<div
																					class="rax-view-v2"
																					style="width: 8px; height: 8px; flex-direction: row; align-items: center; justify-content: center;"
																				>
																					<div
																						class="rax-view-v2"
																						style="width: 6px; height: 6px; border-radius: 3px; background-color: rgb(255, 255, 255);"
																					></div>
																				</div>
																				<div
																					class="rax-view-v2"
																					style="width: 8px; height: 8px; flex-direction: row; align-items: center; justify-content: center;"
																				>
																					<div
																						class="rax-view-v2"
																						style="width: 6px; height: 6px; border-radius: 3px; background-color: rgb(255, 255, 255);"
																					></div>
																				</div>
																				<div
																					class="rax-view-v2"
																					style="width: 8px; height: 8px; flex-direction: row; align-items: center; justify-content: center;"
																				>
																					<div
																						class="rax-view-v2"
																						style="width: 6px; height: 6px; border-radius: 3px; background-color: rgb(255, 255, 255);"
																					></div>
																				</div>
																			</div>
																			<div
																				class="rax-view-v2"
																				style="flex-direction: row; width: 1872px;"
																			>
																				<div
																					class="rax-view-v2"
																					style="position: relative; left: 0px;"
																				>
																					<div
																						class="rax-view-v2"
																						style="margin-top: 7px; width: 60px; display: flex; flex-direction: column; overflow: visible; align-items: flex-start;"
																					>
																						<div
																							class="__rax-text __rax-text--other-default  __rax-text--overflow-hidden __rax-text--singleline __rax-text--ellipsis"
																							style="display: inline; white-space: pre-wrap; flex-shrink: unset; font-family: PingFangSC-Regular; font-weight: 400; font-size: 12px; color: rgb(85, 85, 85); line-height: 16px; letter-spacing: 0vw; max-height: 16px;"
																						>
																							取号成功
																						</div>
																					</div>
																				</div>
																				<div
																					class="rax-view-v2"
																					style="position: absolute; left: 906px;"
																				>
																					<div
																						class="rax-view-v2"
																						style="margin-top: 7px; width: 60px; display: flex; flex-direction: column; overflow: visible; align-items: center;"
																					>
																						<div
																							class="__rax-text __rax-text--other-default  __rax-text--overflow-hidden __rax-text--singleline __rax-text--ellipsis"
																							style="display: inline; white-space: pre-wrap; flex-shrink: unset; font-family: PingFangSC-Regular; font-weight: 400; font-size: 12px; color: rgb(85, 85, 85); line-height: 16px; letter-spacing: 0vw; max-height: 16px;"
																						>
																							商家叫号
																						</div>
																					</div>
																				</div>
																				<div
																					class="rax-view-v2"
																					style="position: absolute; left: 1812px;"
																				>
																					<div
																						class="rax-view-v2"
																						style="margin-top: 7px; width: 60px; display: flex; flex-direction: column; overflow: visible; align-items: flex-end;"
																					>
																						<div
																							class="__rax-text __rax-text--other-default  __rax-text--overflow-hidden __rax-text--singleline __rax-text--ellipsis"
																							style="display: inline; white-space: pre-wrap; flex-shrink: unset; font-family: PingFangSC-Regular; font-weight: 400; font-size: 12px; color: rgb(85, 85, 85); line-height: 16px; letter-spacing: 0vw; max-height: 16px;"
																						>
																							已就餐
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div
												class="rax-view-v2"
												style="display: flex; flex-direction: row; align-items: center; justify-content: space-between; padding-left: 0px; padding-right: 0px; margin-left: 0px; margin-right: 0px; margin-bottom: 11px; height: 12px; width: 100%;"
											>
												<div
													class="rax-view-v2"
													style="width: 12px; height: 12px; border-radius: 6px; background-color: rgb(244, 244, 244); position: absolute; left: -18px; top: 0px;"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>

												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 4px; height: 4px; border-radius: 2px; background-color: rgb(244, 244, 244);"
												></div>
												<div
													class="rax-view-v2"
													style="width: 12px; height: 12px; border-radius: 6px; background-color: rgb(244, 244, 244); position: absolute; right: -18px; top: 0px;"
												></div>
											</div>
											<div
												class="rax-view-v2"
												style="display: flex; flex-direction: row; align-items: center; justify-content: space-between; margin-bottom: 7px;"
											>
												<div
													class="rax-view-v2"
                          onclick="window.location.href = 'https://m.dianping.com/shopinfo/k8BDajR0ronZbg41?msource=Appshare2021&utm_source=shop_share&shoptype=10&shopcategoryid=111&cityid=3&isoversea=0'"
													style="display: flex; align-items: center; flex-direction: row; justify-content: flex-start; flex: 1 1 0%; overflow: hidden; margin-right: 16px;"
												>
													<div
														class="__rax-text __rax-text--other-default  __rax-text--overflow-hidden __rax-text--singleline __rax-text--ellipsis"
														style="display: inline; white-space: pre-wrap; flex-shrink: 1; font-family: PingFangSC-Semibold; font-weight: 600; font-size: 14px; color: rgb(17, 17, 17); line-height: 20px; letter-spacing: 0vw; max-height: 20px;"
													>
														牛New寿喜烧(西溪天街店)
													</div>
													<img
														src="/fa7864c79bd1cf63041ab7e7c56bffb9313.png"
														style="width: 12px; height: 12px; line-height: 16px; margin-top: 0.1333vw;"
													/>
												</div>
												<div
													class="rax-view-v2"
													style="display: flex; flex-direction: row; align-items: center; justify-content: flex-end;"
												>
													<div
														class="rax-view-v2"
														style="display: flex; flex-direction: row; align-items: center;"
													>
														<div
															class="__rax-text __rax-text--other-default  __rax-text--overflow-hidden __rax-text--singleline __rax-text--ellipsis"
															style="display: inline; white-space: pre-wrap; flex-shrink: unset; font-family: PingFangSC-Regular; font-weight: 400; font-size: 12px; color: rgb(85, 85, 85); line-height: 16px; letter-spacing: 0vw; max-height: 16px; margin-right: 3px;"
														>
															进度通知
														</div>
													</div>
													<div
														class="max-button-v1"
														style="width: 24px; height: 14px; border-radius: 14px; background-color: rgb(204, 204, 204); display: flex; flex-direction: row; align-items: center; position: relative; opacity: 1;"
													>
														<div
															animation="[object Object]"
															class="rax-view-v2"
															style="width: 12px; height: 12px; border-radius: 12px; background-color: rgb(255, 255, 255); z-index: 1; margin-left: 1px; transform: translateX(10px);"
														></div>
														<div
															animation="[object Object]"
															class="rax-view-v2"
															style="background-color: rgb(255, 75, 16); border-color: rgb(255, 75, 16); border-width: 1px; position: absolute; width: 24px; height: 14px; border-radius: 14px; opacity: 1;"
														></div>
													</div>
												</div>
											</div>
											<div
												class="rax-view-v2"
												style="display: flex; flex-direction: column;"
											>
												<div
													class="__rax-text __rax-text--other-default  __rax-text--overflow-hidden __rax-text--singleline __rax-text--ellipsis"
													style="display: inline; white-space: pre-wrap; flex-shrink: unset; font-family: PingFangSC-Regular; font-weight: 400; font-size: 12px; color: rgb(85, 85, 85); line-height: 16px; letter-spacing: 0vw; max-height: 16px; width: 100%; margin-bottom: 5px;"
												>
													取号时间：${time}（已等待 ${hasWaitTime} 分钟）
												</div>
												<div
													class="__rax-text __rax-text--other-default  __rax-text--overflow-hidden __rax-text--singleline __rax-text--ellipsis"
													style="display: inline; white-space: pre-wrap; flex-shrink: unset; font-family: PingFangSC-Regular; font-weight: 400; font-size: 12px; color: rgb(85, 85, 85); line-height: 16px; letter-spacing: 0vw; max-height: 16px; width: 100%;"
												>
													手机号码：${phone}（线上取号）
												</div>
											</div>
											<div class="rax-view-v2">
												<div
													class="rax-view-v2"
													style="flex-direction: row; border-radius: 6px; justify-content: space-between; align-items: center; padding-left: 9px; overflow: hidden; position: relative; margin-top: 16px;"
												>
													<div style="position: absolute; inset: 0vw; background-image: linear-gradient(-90deg, rgba(249, 249, 249, 0), rgb(249, 249, 249));"></div>
													<div
														class="__rax-text __rax-text--other-default "
														style='display: inline; white-space: pre-wrap; flex: 1 1 0%; font-family: "PingFang SC"; font-weight: 400; font-size: 12px; color: rgb(85, 85, 85); line-height: 20px; letter-spacing: 0vw; text-align: left; z-index: 1;'
													>
														如无法到店就餐，请及时取消
													</div>
													<div
														class="rax-view-v2"
														style="width: 80px; border-width: 0.5px; border-radius: 17px; flex-direction: row; align-items: center; justify-content: center; border-color: rgb(204, 204, 204); height: 30px; margin-left: 12px;"
													>
														<div
															class="__rax-text __rax-text--other-default  __rax-text--overflow-hidden __rax-text--singleline __rax-text--ellipsis"
															style="display: inline; white-space: pre-wrap; flex-shrink: unset; font-family: PingFangSC-Regular; font-weight: 400; font-size: 14px; color: rgb(17, 17, 17); line-height: 20px; letter-spacing: 0vw; max-height: 20px;"
														>
															取消排队
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="rax-view-v2" style="margin-bottom: 8px;">
										<div
											class="rax-view-v2"
											style="display: flex; flex-direction: column; justify-content: center; background-color: rgb(255, 255, 255); border-radius: 12px; padding: 9px 12px 8px;"
										>
											<div
												class="rax-view-v2"
												style="display: flex; flex-direction: row; align-items: center; justify-content: space-between; margin-bottom: 4px;"
											>
												<div
													class="rax-view-v2"
													style="display: flex; flex-direction: row; align-items: center; justify-content: center;"
												>
													<div
														class="__rax-text __rax-text--other-default  __rax-text--overflow-hidden __rax-text--singleline __rax-text--ellipsis"
														style="display: inline; white-space: pre-wrap; flex-shrink: unset; font-family: PingFangSC-Semibold; font-weight: 600; font-size: 14px; color: rgb(17, 17, 17); line-height: 20px; letter-spacing: 0vw; max-height: 20px;"
													>
														商家说明
													</div>
												</div>
												<div
													class="rax-view-v2"
													style="display: flex; flex-direction: row; align-items: center; justify-content: center; padding-left: 15px; padding-right: 15px; position: absolute; right: 0px; margin-right: -15px;"
												>
													<div
                            onclick="window.handleSetVisible()"
														class="__rax-text __rax-text--other-default  __rax-text--overflow-hidden __rax-text--singleline __rax-text--ellipsis"
														style="display: inline; white-space: pre-wrap; flex-shrink: unset; font-family: PingFangSC-Regular; font-weight: 400; font-size: 12px; color: rgb(85, 85, 85); line-height: 16px; letter-spacing: 0vw; max-height: 16px;"
													>
														全部
													</div>
													<img
														src="/fa7864c79bd1cf63041ab7e7c56bffb9313.png"
														style="width: 12px; height: 12px; line-height: 12px;"
													/>
												</div>
											</div>
											<div
												class="rax-view-v2"
												style="display: flex; flex-direction: column; justify-content: center;"
											>
												<div
                          id="notice"
													class="__rax-text __rax-text--other-default "
													style="display: inline; white-space: pre-wrap; flex-shrink: unset; font-family: PingFangSC-Regular; font-weight: 400; font-size: 12px; color: rgb(85, 85, 85); line-height: 18px; letter-spacing: 0vw; text-align: justify;"
												>1.(取号)
   若营业时间内关闭线上取号代表号已发完请勿跑空
   周六日和节假日线上取号根据现场情况开关,优先线下发号。</div>
											</div>
										</div>
									</div>
									<div class="rax-view-v2" style="padding-bottom: 60px;"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="rax-view-v2 undefined"></div>
			</div>
		</div>
  `;
	return (
		<>
			<PullToRefresh
				onRefresh={async () => {
					await sleep(3000);
					// setData([...getNextData(), ...data]);
				}}
				// renderText={(status) => {
				// 	// return <div>{statusRecord[status]}</div>;
				// 	return <div className="loading-15" />;
				// }}
			>
				<div
					dangerouslySetInnerHTML={{ __html: niuNewHtml }}
					style={{ height: "100%" }}
				></div>
			</PullToRefresh>
			<Popup
				visible={visible}
				onMaskClick={() => {
					setVisible(false);
				}}
				onClose={() => {
					setVisible(false);
				}}
				showCloseButton
				bodyStyle={{
					borderTopLeftRadius: "20px",
					borderTopRightRadius: "20px",
					minHeight: "40vh",
				}}
			>
				<div className="niu-new-popup-title">
					<span>商家说明</span>
				</div>
				<div
					className="niu-new-popup-content"
					style={{
						padding: "0 16px",
						paddingBottom: "16px",
						whiteSpace: "pre-wrap",
						color: "#404040",
						fontSize: "14px",
					}}
				>
					{`1.(取号) 
    若营业时间内关闭线上取号代表号已发完 请勿跑空
    周六日和节假日线上取号根据现场情况开关，优先线下发号。
	周一至周五10：00现场取号 11：00线上同步开餐
	周一至周四4：00现场取号 5：00线上同步开餐
        周五下午4：00现场取号     4：30线上同步开餐
        周六日上午10：00现场取号 11：00开餐
        周六日下午4：00现场取号 4：30开餐 
        周六日根据现场情况开放线上取号
        重点:
        取完号请妥善保管小票，照片形式或者丢失的无法入场，请凭纸质号入场(因近日黄牛较多，稍有变动感谢大家理解配合) 
2.(过号)
过号30分钟内顺延三到五桌，超过30分钟作废，需要重新取号排队。请及时关注叫号进度，网络有延迟，请提前到店等候。
3.黄牛票或倒买倒卖获取的号，被发现怒不接待；门店禁止跑腿代取号；抵制黄牛和倒买倒卖行为，请大家谅解谢谢。 
4.(桌型)
    店内1-4人桌有35桌，5-6人桌有6桌。
5.本店为自助餐 两小时用餐 仅限堂食用餐不支持打包 包含饮料谢绝外带，一经发现做部分押金退款处理。`}
				</div>
			</Popup>
		</>
	);
}

export default NiuNew;
